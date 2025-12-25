document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    const size = 64; // Tamanho do favicon
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Fundo transparente
    ctx.clearRect(0, 0, size, size);

    // Desenha a letra 'S'
    ctx.font = 'bold 48px Poppins';
    ctx.fillStyle = '#c41e3a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('S', size / 2, size / 2 + 5);

    // Carrega e desenha a imagem do chapéu de Papai Noel
    const img = new Image();
    img.src = '../1004729129-removebg-preview.png';
    img.onload = () => {
        // Ajuste as coordenadas e o tamanho conforme necessário
        ctx.drawImage(img, 5, -15, 55, 55);

        // Cria e define o favicon
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = canvas.toDataURL('image/png');
        document.head.appendChild(link);
    };
});
