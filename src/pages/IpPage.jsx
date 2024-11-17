import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function IpPage() {
  const [ipAddress, setIpAddress] = useState('');
  const [prefix, setPrefix] = useState(24);
  const [result, setResult] = useState(null);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // تابع برای تبدیل IP به باینری
  const ipToBinary = (ip) => {
    return ip.split('.').map((octet) => {
      return ('00000000' + parseInt(octet).toString(2)).slice(-8); // تبدیل هر بخش به باینری
    }).join('');
  };

  // تابع برای تبدیل باینری به IP
  const binaryToIp = (binary) => {
    return binary.match(/.{8}/g).map((byte) => parseInt(byte, 2)).join('.');
  };

  // تابع برای محاسبه نت آدرس، ماسک و غیره
  const calculateSubnet = () => {

    handleOpen()
    try {
      // تبدیل آدرس IP به باینری
      const ipBinary = ipToBinary(ipAddress);

      // ایجاد Subnet Mask از پیشوند
      const maskBinary = '1'.repeat(prefix) + '0'.repeat(32 - prefix); // باینری ماسک
      const mask = binaryToIp(maskBinary); // تبدیل به IP

      // محاسبه Net ID
      const netIdBinary = ipBinary.slice(0, prefix) + '0'.repeat(32 - prefix); // صفر کردن بخش میزبان
      const netId = binaryToIp(netIdBinary);

      // محاسبه Broadcast Address
      const broadcastBinary = ipBinary.slice(0, prefix) + '1'.repeat(32 - prefix); // یک کردن بخش میزبان
      const broadcast = binaryToIp(broadcastBinary);

      // محاسبه Wildcard Mask (معکوس Subnet Mask)
      const wildcardBinary = maskBinary.split('').map(bit => bit === '1' ? '0' : '1').join('');
      const wildcard = binaryToIp(wildcardBinary);

      // محاسبه First Usable IP
      const firstUsableBinary = netIdBinary.slice(0, 31) + '1'; // اولین آدرس قابل استفاده
      const firstUsable = binaryToIp(firstUsableBinary);

      // محاسبه Last Usable IP
      const lastUsableBinary = broadcastBinary.slice(0, 31) + '0'; // آخرین آدرس قابل استفاده
      const lastUsable = binaryToIp(lastUsableBinary);

      // تعداد هاست‌ها
      const totalHosts = Math.pow(2, 32 - prefix) - 2; // 2 آدرس برای شبکه و پخش کنار گذاشته می‌شود

      setResult({
        netId: netId,
        subnetMask: mask,
        wildcardMask: wildcard,
        firstUsable: firstUsable,
        lastUsable: lastUsable,
        broadcast: broadcast,
        totalHosts: totalHosts,
      });
    } catch (err) {
      alert('لطفاً یک آدرس IP معتبر وارد کنید!');
    }
  };

  return (
    <div className='flex justify-center items-center gap-10 flex-col w-96 h-96 shadow-lg p-5 mx-auto translate-y-[50%]'>
      <h1 className='font-bold text-xl'>محاسبه‌کننده شبکه</h1>
      <div className='flex flex-col gap-10 w-full'>
        <TextField className='w-full' onChange={(event) => setIpAddress(event.target.value)} value={ipAddress} id="outlined-basic" variant="outlined" />
        <TextField className='w-full' onChange={(event) => setPrefix(event.target.value)} value={prefix} id="outlined-basic" variant="outlined" />
        <Button onClick={calculateSubnet} className='h-14' variant="contained">Contained</Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {result && (
            <div>
              <ul className='font-bold mx-auto w-96 h-96 bg-white p-10 flex justify-center items-center flex-col gap-y-5 text-xl my-36 rounded-lg shadow-2xl'>
                <li>Net ID: {result.netId}</li>
                <li>Subnet Mask: {result.subnetMask}</li>
                <li>Wildcard Mask: {result.wildcardMask}</li>
                <li>First Usable IP: {result.firstUsable}</li>
                <li>Last Usable IP: {result.lastUsable}</li>
                <li>Broadcast Address: {result.broadcast}</li>
                <li>Total Hosts: {result.totalHosts}</li>
              </ul>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
