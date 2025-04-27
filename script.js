let currentCoverage = 400;

function calculateArea() {
  const floorArea = parseFloat(document.getElementById('floorArea').value);
  const ceilingHeight = parseFloat(document.getElementById('ceilingHeight').value);
  const numRooms = parseInt(document.getElementById('numRooms').value);

  if (isNaN(floorArea) || isNaN(ceilingHeight) || isNaN(numRooms) || floorArea <= 0 || ceilingHeight <= 0 || numRooms <= 0) {
    alert('Please fill in all fields with valid positive numbers.');
    return;
  }

  const averageRoomArea = floorArea / numRooms;
  const wallAreaPerRoom = (averageRoomArea / Math.sqrt(averageRoomArea)) * 2 * ceilingHeight + (Math.sqrt(averageRoomArea) * 2 * ceilingHeight);
  const totalWallArea = wallAreaPerRoom * numRooms;

  const paintNeeded = totalWallArea / currentCoverage;

  document.getElementById('wallAreaResult').textContent = `Estimated Wall Area: ${totalWallArea.toFixed(2)} sq ft`;
  document.getElementById('paintNeededResult').textContent = `Estimated Paint Needed: ${paintNeeded.toFixed(2)} gallons`;
}

function resetForm() {
  document.getElementById('floorArea').value = '';
  document.getElementById('ceilingHeight').value = '';
  document.getElementById('numRooms').value = '';
  document.getElementById('texture').value = 'smooth';
  document.getElementById('wallAreaResult').textContent = '';
  document.getElementById('paintNeededResult').textContent = '';
  document.getElementById('coverageResult').textContent = '';
  updateBackground('smooth');
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

function updateCoverage() {
  const texture = document.getElementById('texture').value;

  switch (texture) {
    case 'smooth':
      currentCoverage = 400;
      break;
    case 'orangePeel':
      currentCoverage = 375;
      break;
    case 'knockdown':
      currentCoverage = 350;
      break;
    case 'popcorn':
      currentCoverage = 300;
      break;
    case 'masonry':
      currentCoverage = 275;
      break;
    case 'stucco':
      currentCoverage = 250;
      break;
    default:
      currentCoverage = 400;
  }

  document.getElementById('coverageResult').textContent = `Current Coverage: ${currentCoverage} sq ft/gallon`;

  updateBackground(texture);
}

function updateBackground(textureType) {
  const app = document.getElementById('appBackground');
  app.className = `min-h-screen flex items-center justify-center background-${textureType} transition-all duration-500`;
}
