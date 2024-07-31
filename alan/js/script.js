document.addEventListener('DOMContentLoaded', () => {
    
    function updateEnvironmentStatus(id, status) {
        const environment = document.getElementById(id);
        const statusElement = environment.querySelector('.status');
        
        statusElement.dataset.status = status;
        statusElement.textContent = getStatusText(status);
    }
    
    
    function getStatusText(status) {
        switch (status) {
            case 'free': return 'Livre';
            case 'occupied': return 'Ocupado';
            case 'maintenance': return 'Manutenção';
            default: return 'Desconhecido';
        }
    }

    
    updateEnvironmentStatus('room1', 'free');
    updateEnvironmentStatus('lab1', 'occupied');
    updateEnvironmentStatus('room2', 'maintenance');
    updateEnvironmentStatus('room3', 'free');
    updateEnvironmentStatus('netLab', 'free');
});