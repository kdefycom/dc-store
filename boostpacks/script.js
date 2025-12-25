
        const container = document.getElementById('snowflakes');
        const snowflakes = ['❄', '❅', '❆', '✦', '•'];
        
        function createSnowflake() {
            const flake = document.createElement('div');
            flake.className = 'snowflake';
            flake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
            flake.style.left = Math.random() * 100 + 'vw';
            flake.style.fontSize = (Math.random() * 1 + 0.5) + 'em';
            flake.style.opacity = Math.random() * 0.6 + 0.4;
            flake.style.animationDuration = (Math.random() * 5 + 5) + 's';
            container.appendChild(flake);
            setTimeout(() => flake.remove(), 10000);
        }
        
        setInterval(createSnowflake, 200);
        for(let i = 0; i < 30; i++) setTimeout(createSnowflake, i * 100);
