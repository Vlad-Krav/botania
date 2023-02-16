-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-02-2023 a las 10:01:43
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sym-botania`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20230208111424', '2023-02-08 12:14:51', 57);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plant`
--

CREATE TABLE `plant` (
  `id` int(11) NOT NULL,
  `tipo_id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valoracion` int(11) NOT NULL,
  `descripcion_corta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `plant`
--

INSERT INTO `plant` (`id`, `tipo_id`, `nombre`, `valoracion`, `descripcion_corta`, `descripcion`, `imagen`) VALUES
(12, 9, 'Pino', 5, 'PINOOOOOOOOOOOOOOOOOOOOO', 'PINOOOOOOOOOOOOOOOOOOOOO', 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQIgUxmD_dNZYd_4p1X2lpPoD_p_cr5aT6dHq_ehI55kODismSyX00CH--zk1oXoRwA'),
(13, 1, 'Patata', 5, 'Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Pat', 'Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Patata bikini Pat', 'https://3.bp.blogspot.com/-VRlGp1o04OE/TsTesOz4jVI/AAAAAAAAAHU/lPgSMc9tHL0/s1600/patata.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo`
--

CREATE TABLE `tipo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tipo`
--

INSERT INTO `tipo` (`id`, `nombre`) VALUES
(1, 'Tuberculo'),
(2, 'Turberculo'),
(3, 'Turberculoo'),
(4, 'aaa'),
(5, 'Arbol'),
(6, 'AAAAAAAAAA'),
(7, 'Arbolaceo'),
(8, 'Bertuculo'),
(9, 'Arboles');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indices de la tabla `plant`
--
ALTER TABLE `plant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_AB030D72A9276E6C` (`tipo_id`);

--
-- Indices de la tabla `tipo`
--
ALTER TABLE `tipo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `plant`
--
ALTER TABLE `plant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tipo`
--
ALTER TABLE `tipo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `plant`
--
ALTER TABLE `plant`
  ADD CONSTRAINT `FK_AB030D72A9276E6C` FOREIGN KEY (`tipo_id`) REFERENCES `tipo` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
