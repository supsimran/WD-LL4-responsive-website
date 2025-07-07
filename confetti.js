// Simple confetti effect for beginners
// This code creates colorful confetti when called

function launchConfetti() {
  // Create a container for confetti
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.left = 0;
  confettiContainer.style.top = 0;
  confettiContainer.style.width = '100vw';
  confettiContainer.style.height = '100vh';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = 3000;
  document.body.appendChild(confettiContainer);

  // Function to create a burst of confetti
  function createBurst() {
    for (let i = 0; i < 40; i++) { // 40 pieces per burst, more bursts overall
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = '10px';
      confetti.style.height = '18px';
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = '-30px';
      confetti.style.opacity = 0.8;
      confetti.style.borderRadius = '3px';
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confettiContainer.appendChild(confetti);

      // Animate each confetti piece
      setTimeout(() => {
        confetti.style.transition = 'top 1.2s linear, left 1.2s linear, opacity 1.2s';
        confetti.style.top = (window.innerHeight * 0.7 + Math.random() * window.innerHeight * 0.3) + 'px';
        confetti.style.left = (parseFloat(confetti.style.left) + (Math.random() - 0.5) * 200) + 'px';
        confetti.style.opacity = 0;
      }, 10);
    }
  }

  // Launch bursts every 200ms for 2 seconds
  let bursts = 0;
  const burstInterval = setInterval(() => {
    createBurst();
    bursts++;
    if (bursts >= 10) { // 10 bursts x 200ms = 2 seconds
      clearInterval(burstInterval);
    }
  }, 200);

  // Remove confetti after animation
  setTimeout(() => {
    confettiContainer.remove();
  }, 2600); // Wait a bit longer to let all confetti finish
}

// Helper function to get a random bright color
function getRandomColor() {
  const colors = ['#ffc907', '#003366', '#fff7e1', '#1a1a1a', '#ff5e57', '#4cd964', '#5ac8fa', '#ffd700'];
  return colors[Math.floor(Math.random() * colors.length)];
}
