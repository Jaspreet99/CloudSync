function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';

  const i = Number(Math.floor(Math.log(bytes) / Math.log(1024)));
  const x = `${(bytes / (1024 ** i)).toFixed(2)} ${sizes[i]}`;

  return x;
}

export default bytesToSize;
