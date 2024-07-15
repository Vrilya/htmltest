const backgroundImages = [];
const gridSize = 100; // Size of each grid cell

function createFairy() {
    const fairy = document.createElement('div');
    const colors = ['red', 'green', 'white'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    fairy.classList.add('fairy', randomColor);
    fairy.style.left = Math.random() * (window.innerWidth - 20) + 10 + 'px';
    fairy.style.top = Math.random() * (window.innerHeight - 20) + 10 + 'px';
    document.body.appendChild(fairy);

    setTimeout(() => {
        fairy.remove();
    }, 10000);
}

function createBackgroundElement(type) {
    const element = document.createElement('div');
    element.classList.add('background-element', type);
    
    if (type === 'background-image') {
        const gridX = Math.floor(Math.random() * (window.innerWidth / gridSize));
        const gridY = Math.floor(Math.random() * (window.innerHeight / gridSize));
        
        element.style.left = (gridX * gridSize + Math.random() * 20 - 10) + 'px';
        element.style.top = (gridY * gridSize + Math.random() * 20 - 10) + 'px';
        
        element.style.animationName = 'rotateSlowly';
        element.style.animationDuration = (Math.random() * 20 + 10) + 's';
        element.style.animationTimingFunction = 'linear';
        element.style.animationIterationCount = 'infinite';
        
        setTimeout(() => {
            element.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        }, 100);

        backgroundImages.push(element);
    } else {
        element.style.left = Math.random() * (window.innerWidth - 60) + 30 + 'px';
        element.style.top = Math.random() * (window.innerHeight - 100) + 50 + 'px';
    }
    
    document.body.appendChild(element);

    if (type === 'background-image') {
        fadeOutAndRemove(element);
    }
}

function fadeOutAndRemove(element) {
    setTimeout(() => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.remove();
            backgroundImages.splice(backgroundImages.indexOf(element), 1);
            createBackgroundElement('background-image');
        }, 2000);
    }, Math.random() * 10000 + 5000);
}

function showProjectInfo() {
    hideAllContent();
    setTimeout(() => {
        document.getElementById('project-info').style.display = 'block';
        setTimeout(() => {
            document.getElementById('project-info').classList.remove('hidden');
        }, 50);
    }, 500);
}

function showProjectStart() {
    hideAllContent();
    setTimeout(() => {
        document.getElementById('project-start').style.display = 'block';
        setTimeout(() => {
            document.getElementById('project-start').classList.remove('hidden');
        }, 50);
    }, 500);
}

function showWelcomeContent() {
    hideAllContent();
    setTimeout(() => {
        document.getElementById('welcome-content').style.display = 'block';
        setTimeout(() => {
            document.getElementById('welcome-content').classList.remove('hidden');
        }, 50);
    }, 500);
}

function showDownloadContent() {
    hideAllContent();
    setTimeout(() => {
        document.getElementById('download-content').style.display = 'block';
        setTimeout(() => {
            document.getElementById('download-content').classList.remove('hidden');
        }, 50);
    }, 500);
}

function hideAllContent() {
    const contents = ['welcome-content', 'project-info', 'project-start', 'download-content'];
    contents.forEach(id => {
        const element = document.getElementById(id);
        element.classList.add('hidden');
        setTimeout(() => {
            element.style.display = 'none';
        }, 500);
    });
}

// Create initial background elements
for (let i = 0; i < 30; i++) {
    createBackgroundElement('background-image');
}

setInterval(createFairy, 1000);
setInterval(() => {
    if (backgroundImages.length < 30) {
        createBackgroundElement('background-image');
    }
}, 2000);
