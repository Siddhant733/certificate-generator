function generateCertificates() {
  const category = document.getElementById('category').value || "Certificate of Excellence";
  const container = document.getElementById('certificate-container');
  container.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;

    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#f2d9d9'; // light maroon
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.fillStyle = '#000';
    ctx.font = '28px Georgia';
    ctx.textAlign = 'center';
    ctx.fillText(category, canvas.width / 2, 80);

    // Presented to
    ctx.font = '20px Arial';
    ctx.fillText("This is proudly presented to", canvas.width / 2, 140);

    // Recipient Name
    ctx.font = '32px Verdana';
    ctx.fillStyle = '#800000';
    ctx.fillText("Siddhant Titame", canvas.width / 2, 200);

    // Message
    ctx.font = '18px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText("For outstanding performance and dedication", canvas.width / 2, 260);

    // Footer
    ctx.font = '14px Arial';
    ctx.fillText("Date: " + new Date().toLocaleDateString(), canvas.width / 2, 320);

    // Code container
    const code = document.createElement('pre');
    code.textContent = `
const canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 400;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#f2d9d9'; // light maroon
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = 'green';
ctx.lineWidth = 10;
ctx.strokeRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#000';
ctx.font = '28px Georgia';
ctx.textAlign = 'center';
ctx.fillText('${category}', 300, 80);
ctx.font = '20px Arial';
ctx.fillText('This is proudly presented to', 300, 140);
ctx.font = '32px Verdana';
ctx.fillStyle = '#800000';
ctx.fillText('Siddhant Titame', 300, 200);
ctx.font = '18px Arial';
ctx.fillStyle = '#000';
ctx.fillText('For outstanding performance and dedication', 300, 260);
ctx.font = '14px Arial';
ctx.fillText('Date: ${new Date().toLocaleDateString()}', 300, 320);
`;

    const div = document.createElement('div');
    div.className = 'certificate';
    div.appendChild(canvas);
    div.appendChild(code);
    container.appendChild(div);
  }
}
