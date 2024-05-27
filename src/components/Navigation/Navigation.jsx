import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <aside>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/acerca">Acerca de</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Navigation;
