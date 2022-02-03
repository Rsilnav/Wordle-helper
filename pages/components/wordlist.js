import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Home.module.css';

export default function WordList(props) {

    const ref = useRef({
        words: ['abajo', 'abano', 'abeja', 'abono', 'abril', 'abrir', 'abuso', 'acabe', 'acabo', 'acaso', 'acera', 'acero', 'acida', 'actor', 'adios', 'aereo', 'agrio', 'agudo', 'aguja', 'albur', 'aldea', 'alpes', 'altar', 'amiga', 'amigo', 'andar', 'anden', 'anime', 'antro', 'anual', 'apoyo', 'araña', 'arena', 'arepa', 'arete', 'aries', 'armar', 'aroma', 'arpia', 'arpon', 'arroz', 'asado', 'atajo', 'ataud', 'atras', 'atril', 'atroz', 'audaz', 'avena', 'ayuda', 'ayuno', 'bahia', 'baila', 'baile', 'bajar', 'bajon', 'banco', 'banda', 'barca', 'barco', 'bañar', 'beber', 'besar', 'bingo', 'bollo', 'bolsa', 'bolso', 'bomba', 'bonus', 'botar', 'botin', 'boton', 'boxeo', 'boxer', 'brava', 'bravo', 'braza', 'brazo', 'broma', 'bruja', 'brujo', 'buceo', 'bucle', 'bueno', 'bufon', 'burla', 'burra', 'burro', 'busca', 'busco', 'cable', 'cabra', 'cacao', 'cacho', 'cagar', 'cagon', 'cague', 'caido', 'cajon', 'caldo', 'calla', 'calle', 'callo', 'calma', 'calor', 'calva', 'calvo', 'campo', 'canta', 'cante', 'canto', 'carga', 'cargo', 'carne', 'casar', 'casco', 'catar', 'cañon', 'celda', 'cenar', 'cerca', 'cerco', 'cerda', 'cerdo', 'cerro', 'cesta', 'chica', 'chico', 'chile', 'china', 'chino', 'ciego', 'cielo', 'circo', 'cisne', 'clave', 'clavo', 'clima', 'cobra', 'cobre', 'cobro', 'cocer', 'coche', 'coger', 'coito', 'colar', 'comer', 'conde', 'conga', 'congo', 'copia', 'coral', 'corro', 'corta', 'corte', 'corto', 'coste', 'costo', 'cotar', 'crack', 'crear', 'creer', 'crema', 'cuero', 'cueva', 'cuida', 'culto', 'cursi', 'cutre', 'danza', 'dejar', 'deseo', 'deuda', 'dicha', 'dicho', 'dieta', 'digno', 'diosa', 'disco', 'dobla', 'doble', 'doblo', 'dogma', 'doler', 'dolor', 'domar', 'donar', 'donde', 'drama', 'droga', 'ducha', 'duelo', 'dueto', 'dueña', 'dueño', 'dulce', 'durar', 'ellos', 'enano', 'enero', 'entre', 'envio', 'erizo', 'errar', 'error', 'espia', 'estar', 'extra', 'faena', 'fallo', 'falsa', 'falso', 'falta', 'falto', 'farol', 'farsa', 'fauna', 'fauno', 'favor', 'fecha', 'feliz', 'femur', 'fenix', 'feroz', 'finca', 'finta', 'firma', 'firme', 'fisco', 'flaco', 'flama', 'flora', 'flota', 'flote', 'fluir', 'flujo', 'fobia', 'forma', 'forro', 'foton', 'fresa', 'frita', 'frito', 'fruta', 'fruto', 'fuego', 'fuera', 'fuero', 'fumar', 'fusil', 'gallo', 'gamba', 'ganar', 'ganso', 'gatas', 'gemir', 'gente', 'girar', 'golpe', 'gorda', 'gordo', 'gorro', 'goteo', 'grano', 'grasa', 'grave', 'gripe', 'guapo', 'guiso', 'gusto', 'hacer', 'helio', 'hielo', 'himno', 'hogar', 'hongo', 'hueco', 'hueso', 'huevo', 'humor', 'icono', 'ideal', 'igual', 'ileso', 'jaleo', 'jamas', 'jamon', 'japon', 'jaque', 'jarro', 'jaula', 'judas', 'juego', 'jueza', 'jugar', 'junio', 'junta', 'junto', 'jurar', 'jurco', 'justo', 'karma', 'kefir', 'koala', 'koine', 'kopek', 'kurdo', 'labia', 'labio', 'labor', 'ladra', 'laico', 'lamer', 'lapiz', 'laser', 'latex', 'latir', 'leche', 'lecho', 'legal', 'legua', 'lejos', 'lemur', 'lento', 'leñar', 'liana', 'libra', 'libre', 'libro', 'licor', 'licra', 'lider', 'ligar', 'limar', 'limbo', 'limon', 'lindo', 'linea', 'lista', 'listo', 'litio', 'litro', 'lituo', 'llaga', 'llama', 'llave', 'llena', 'lleno', 'lloro', 'lucha', 'lucir', 'lucro', 'lugar', 'lunar', 'macho', 'madre', 'magia', 'magno', 'malla', 'manco', 'mania', 'manso', 'manta', 'marca', 'marco', 'marea', 'mareo', 'marzo', 'matar', 'matiz', 'mayor', 'mecha', 'media', 'medio', 'medir', 'mejor', 'melon', 'menor', 'menos', 'menta', 'mente', 'metal', 'meter', 'metro', 'miedo', 'mimar', 'minal', 'miope', 'mirar', 'misil', 'misio', 'mojar', 'monja', 'morir', 'mosca', 'motel', 'movil', 'mudar', 'mueca', 'muela', 'muera', 'multa', 'mundo', 'mural', 'nadie', 'nariz', 'negar', 'negro', 'nicho', 'nieto', 'nieve', 'noche', 'norte', 'novio', 'nueva', 'nueve', 'nuevo', 'oasis', 'obeso', 'obvio', 'ocaso', 'olivo', 'orden', 'oreja', 'orina', 'oruga', 'ostia', 'otoño', 'oveja', 'ozono', 'padre', 'palco', 'palma', 'papel', 'parar', 'pared', 'paseo', 'pasta', 'patas', 'patio', 'pausa', 'pauta', 'peaje', 'pecar', 'pecho', 'pesca', 'picar', 'pieza', 'pinta', 'pinza', 'piojo', 'pisar', 'pizza', 'plano', 'playa', 'plaza', 'pleno', 'plomo', 'pluma', 'podar', 'poder', 'poema', 'poeta', 'polar', 'polen', 'pollo', 'polvo', 'poner', 'pongo', 'posar', 'preso', 'prima', 'primo', 'prisa', 'pugna', 'pulga', 'pulpa', 'pulpo', 'quema', 'radio', 'rapto', 'rasgo', 'raspa', 'rasta', 'rayar', 'razon', 'regla', 'reina', 'reino', 'reloj', 'renta', 'rezar', 'rimar', 'robar', 'rocio', 'rodeo', 'rollo', 'rosal', 'rotar', 'rubia', 'rubio', 'rublo', 'rueda', 'ruedo', 'ruego', 'rugby', 'ruido', 'ruina', 'rumba', 'rumbo', 'rumor', 'rural', 'saber', 'sabio', 'sabor', 'saldo', 'salir', 'salmo', 'salon', 'salsa', 'samba', 'sanar', 'santa', 'santo', 'sarro', 'sarza', 'sauco', 'secar', 'secta', 'selva', 'serie', 'serio', 'sexta', 'sexto', 'señal', 'señor', 'siete', 'siglo', 'sigma', 'signo', 'silla', 'silva', 'simio', 'sismo', 'socio', 'solar', 'soplo', 'sorda', 'suave', 'subir', 'sucio', 'sudar', 'sudor', 'suelo', 'sueño', 'sushi', 'tabla', 'tallo', 'tango', 'tapar', 'tarde', 'tarea', 'tarot', 'tarro', 'tarta', 'tauro', 'tecla', 'telar', 'tesis', 'tesla', 'tibio', 'tieso', 'tigre', 'tinta', 'tinte', 'tinto', 'tirar', 'titan', 'titar', 'tocar', 'tomar', 'tonto', 'torre', 'torta', 'trago', 'traje', 'trama', 'tramo', 'trece', 'tribu', 'trono', 'tumor', 'tutor', 'usado', 'vacio', 'vagon', 'vaina', 'valla', 'vapor', 'vejez', 'veloz', 'viaje', 'video', 'vieja', 'viejo', 'villa', 'virus', 'vital', 'vivir', 'vodka', 'volar', 'zebra', 'zombi', 'zorro', 'zurdo'],
    });

    const [actualWords, setActualWords] = useState([...ref.current.words]);


    useEffect(() => {

        const grey = props.grey[0];
        const green = props.green;
        const yellow = props.yellow;

        const greyLetters = grey.split('');

        let tempWords = [...ref.current.words];
        // Filter grey
        tempWords = tempWords.filter(word => greyLetters.every(v => !word.includes(v)));

        for (let i = 0; i < 5; i++) {
            // Filter green
            if (green[i].length === 1) {
                tempWords = tempWords.filter(word => word[i] === green[i]);
            }

            // Filter yellow
            if (yellow[i].length === 1) {
                // Rule away those with the letter there
                tempWords = tempWords.filter(word => word[i] !== yellow[i]);
                // Not ideal yellow filter, but worth (?)
                tempWords = tempWords.filter(word => word.includes(yellow[i]));
            }
        }

        setActualWords(tempWords);
    }, [props, ref]);

    return (
        <div>
            <ul className={ styles.wordlist }>
                { actualWords.map(word => <li key={ word }>{ word }</li>) }
            </ul>
        </div>
    );
}
