// menufijo.js
document.addEventListener("DOMContentLoaded", function() {
    // 1. Cargar la librería de iconos de Google Material
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Round';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // 2. Inyectar los Estilos de la Sidebar
    const styles = `
        :root {
            --sidebar-width: 100px;
            --accent-color: #ff0000;
        }
        .sidebar {
            width: var(--sidebar-width);
            height: 100vh;
            background: #121212;
            position: fixed;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 30px;
            border-right: 1px solid #2a2a2a;
            z-index: 1000;
        }
        .side-logo {
            width: 50px;
            height: auto;
            margin-bottom: 50px;
            filter: grayscale(1) brightness(2);
            transition: 0.3s;
            cursor: pointer;
        }
        .sidebar:hover .side-logo {
            filter: grayscale(0) brightness(1);
        }
        .nav-menu {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            align-items: center;
        }
        .nav-item {
            width: 80px;
            height: 70px;
            background: transparent;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            color: #666;
            padding: 5px;
        }
        .nav-item span.material-icons-round {
            font-size: 26px;
            margin-bottom: 5px;
        }
        .nav-item span.nav-text {
            font-size: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0px;
            font-weight: 700;
            text-align: center;
            width: 100%;
        }
        .nav-item:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.05);
        }
        .nav-item.active {
            background: var(--accent-color);
            color: white;
            box-shadow: 0 8px 20px rgba(255, 0, 0, 0.3);
        }
        .nav-item.active span.nav-text {
            color: white;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // 3. Crear la Estructura HTML con el logo como link
    const sidebarHTML = `
        <div class="sidebar">
            <a href="index.html">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" class="side-logo" alt="YouTube Logo">
            </a>
            <nav class="nav-menu">
                <a href="index.html" class="nav-item" id="nav-inicio">
                    <span class="material-icons-round">home</span>
                    <span class="nav-text">Inicio</span>
                </a>
                <a href="analiticaprofunda.html" class="nav-item" id="nav-analitica">
                    <span class="material-icons-round">insights</span>
                    <span class="nav-text">Análisis</span>
                </a>
                <a href="audiencia.html" class="nav-item" id="nav-audiencia">
                    <span class="material-icons-round">groups</span>
                    <span class="nav-text">Audiencia</span>
                </a>
                <a href="tamañoycrecimientodelpublico.html" class="nav-item" id="nav-crecimiento">
                    <span class="material-icons-round">trending_up</span>
                    <span class="nav-text">Crecimiento</span>
                </a>
                <a href="fuentesdetrafico.html" class="nav-item" id="nav-trafico">
                    <span class="material-icons-round">route</span>
                    <span class="nav-text">Tráfico</span>
                </a>
                <a href="ubicaciongrafica.html" class="nav-item" id="nav-geografia">
                    <span class="material-icons-round">public</span>
                    <span class="nav-text">Geografía</span>
                </a>
            </nav>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

    // 5. Marcar como activa la pestaña actual
    const rawPage = window.location.pathname.split("/").pop();
    const currentPage = decodeURIComponent(rawPage); 
    
    if (currentPage === "index.html" || currentPage === "") {
        document.getElementById("nav-inicio").classList.add("active");
    } else if (currentPage === "analiticaprofunda.html") {
        document.getElementById("nav-analitica").classList.add("active");
    } else if (currentPage === "audiencia.html") {
        document.getElementById("nav-audiencia").classList.add("active");
    } else if (currentPage === "tamañoycrecimientodelpublico.html") {
        document.getElementById("nav-crecimiento").classList.add("active");
    } else if (currentPage === "fuentesdetrafico.html") {
        document.getElementById("nav-trafico").classList.add("active");
    } else if (currentPage === "ubicaciongrafica.html") {
        document.getElementById("nav-geografia").classList.add("active");
    }
});