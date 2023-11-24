import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import $ from 'jquery'; // Importe a biblioteca jQuery

function Menu() {
    useEffect(() => {
        const setDotPosition = () => {
            const activeOffset = $('nav ul .active').position().left;
            const activeItemWidth = $('nav ul .active').width();
            $('.dot').css('left', activeOffset + activeItemWidth / 2);
            const bgColor = $('.active a').css('background-color');
            $('.dot').css('background-color', bgColor);
        };

        $('document').ready(() => {
            setDotPosition();
        });

        $('nav').mouseout(() => {
            setDotPosition();
        });

        $('nav ul li').hover(function () {
            const navOffset = $(this).position().left;
            const navItemWidth = $(this).width();
            $('.dot').css('left', navOffset + navItemWidth / 2);
            const bgColor = $('a', this).css('background-color');
            $('.dot').css('background-color', bgColor);
        });
    }, []);

    return (
        <header className="header">
            <nav>
                <div className="dot"></div>
                <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="/processador">Processadores</a></li>
                    <li><a href="/placa-mae">Placas Mãe</a></li>
                    <li><a href="/memoria">Memórias</a></li>
                    <li><a href="/fonte">Fontes</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Menu;
