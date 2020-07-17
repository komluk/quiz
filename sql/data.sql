-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2020 at 06:40 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz_db`

INSERT INTO `answers` (`id`, `question_id`, `value`, `correct`) VALUES
(1, 1, '$DOMAIN', 0),
(2, 1, '$GLOBALS', 0),
(3, 1, '$_ENV', 0),
(4, 1, '$REMOTE_ADDR', 1),
(5, 2, '< input name= MyArray[]/>', 0),
(6, 2, '< input ="MyArray[]" />', 0),
(7, 2, '< input name="MyArray[]" />', 1),
(8, 2, '< input MyArray[] />', 0),
(9, 3, 'const', 0),
(10, 3, 'constant', 0),
(11, 3, 'define', 1),
(12, 3, '#pragma', 0);
(13, 4, '// skomentowany kod do końca linii', 0),
(14, 4, '/* skomentowany kod tutaj */', 0),
(15, 4, '#  kod z komentarzem do końca wiersza', 0),
(16, 4, 'wszystkie powyższe', 1);
(17, 5, 'Porównuje klucze tablicowe i zwraca wynik', 0),
(18, 5, 'Sprawdza, czy określony klucz istnieje w tablicy', 0),
(19, 5, 'Zwraca wszystkie klucze tablicy', 1),
(20, 5, 'Zarówno b, jak i c powyżej', 0);
(21, 6, 'Znajdź ostatni znak łańcucha', 0);
(22, 6, 'Zarówno b, jak i c', 0);
(23, 6, 'Wyszukiwanie znaku w ciągu znaków', 1);
(24, 6, 'Zlokalizuj pozycję pierwszego znaku łańcucha', 0);
(25, 7, '!=', 0);
(26, 7, '>=', 0);
(27, 7, '<=>', 1);
(28, 7, '<>', 0);
(29, 8, 'redirect()', 0);
(30, 8, 'header()', 1);
(31, 8, 'reflect()', 0);
(32, 8, 'Żaden z powyższych', 0);
(33, 9, 'setcookie()', 1);
(34, 9, '$_COOKIE', 0);
(35, 9, '$HTTP_COOKIE_VARS', 0);
(36, 9, 'isset() ', 0);
(37, 10, "$_FILES['file']['error']", 0);
(38, 10, "$_FILES['file']['name']", 0);
(39, 10, "$_FILES['file']['size']", 0);
(40, 10, "$_FILES['file']['type']", 0);
(41, 11, 'Funkcje', 0),
(42, 11, 'Plik', 1),
(43, 11, 'Udostępnianie pliku', 0),
(44, 11, 'Data', 0),
(45, 12, '< script=’java’>', 0),
(46, 12, '< javascript>', 0),
(47, 12, '< script>', 1),
(48, 12, '< js>', 0),
(49, 13, '&', 0),
(50, 13, '\\', 1),
(51, 13, '-', 0),
(52, 13, '%', 0),
(53, 14, 'var txt = new Array(1:"xyz",2:"abc",3:"asd")', 0),
(54, 14, 'var txt = new Array:1=(" xyz ")2=("abc")3=("asd")', 0),
(55, 14, 'var txt = new Array("xyz ","abc","asd")', 1),
(56, 14, 'var txt = new Array=" xyz ","abc","asd"', 0),
(57, 15, 'System.out.println(“Hello World”)', 0),
(58, 15, 'print(“Hello World”)', 0),
(59, 15, 'document.write(“Hello World”)', 1),
(60, 15, 'response.write(“Hello World”)', 0),
(61, 16, 'visibilty', 1),
(62, 16, 'visible', 0),
(63, 16, 'invisibility', 0),
(64, 16, 'invisible', 0),
(65, 17, 'new Date(dateString)', 0),
(66, 17, 'new Date()', 0),
(67, 17, 'new Date(seconds)', 1),
(68, 17, 'new Date(year, month, day, hours, minutes, seconds, milliseconds)', 0),
(69, 18, 'HTML', 0),
(70, 18, 'CSS', 0),
(71, 18, 'XML', 0),
(72, 18, 'Java Script', 1),
(73, 19, '#000000;', 1),
(74, 19, '#0000000;', 0),
(75, 19, '#00000000;', 0),
(76, 19, '#000000000;', 0),
(77, 20, 'Użycie atrybutu zmiany rozmiaru', 0),
(78, 20, 'Wykorzystanie wysokości i szerokości', 1),
(79, 20, 'Użycie atrybutu rozmiaru', 0),
(80, 20, 'Użycie atrybutu rs', 0),
(81, 21, 'Użycie &', 0),
(82, 21, 'Użycie $', 0),
(83, 21, 'Użycie *', 1),
(84, 21, 'Użycie #', 0),
(85, 22, 'jednej sesji', 1),
(86, 22, 'dwóch sesji', 0),
(87, 22, 'trzech sesji', 0),
(88, 22, 'wielu sesji', 0),
(89, 23, 'border[round]: 30px;', 0),
(90, 23, 'corner-effect: round;', 0),
(91, 23, 'border-radius: 30px; ', 1),
(92, 23, 'alpha-effect: round-corner;', 0),
(93, 24, 'background-size: 80px 60px; ', 1),
(94, 24, 'background-proportion: 80px 60px;', 0),
(95, 24, 'alpha-effect: bg-resize 80px 60px;', 0),
(96, 24, 'Żaden z powyższych', 0),
(97, 25, 'h2 {font-size:200%;}', 0),
(98, 25, 'h2 {font-size:200px;}', 0),
(99, 25, 'Obydwa a i b', 1),
(100, 25, 'h2 {font-size:200;}', 0),
(101, 26, 'Dwa', 1),
(102, 26, 'Trzy', 0),
(103, 26, 'Cztery', 0),
(104, 26, 'Żaden z nich', 0),
(105, 27, '.serialize() ', 1),
(106, 27, '.serializeAll()', 0),
(107, 27, '.synchronized()', 0),
(108, 27, 'Żaden z nich', 0),
(109, 28, 'getMessage()', 0),
(110, 28, 'getCode()', 0),
(111, 28, 'getFile()', 1),
(112, 28, 'getLine()', 0),
(113, 29, 'mysql_connect()', 0),
(114, 29, 'mysql_query()', 0),
(115, 29, 'mysql_close()', 1),
(116, 29, 'Żaden z powyższych', 0),
(117, 30, 'link', 0),
(118, 30, 'ref', 0),
(119, 30, 'href', 1),
(120, 30, 'newref', 0),

INSERT INTO `questions` (`id`, `value`, `created`) VALUES
(1, 'W jakiej zmiennej zapisywany jest adres IP użytkownika?', '2020-07-16 11:50:58'),
(2, 'Jak utworzyć tablice PHP w formacie HTML <form>?', '2020-07-16 11:50:58'),
(3, 'Który z poniższych elementów jest używany do zadeklarowania stałej?', '2020-07-16 11:50:58');
(4, 'Jaki jest sposób na tworzenie komentarzy w PHP?', '2020-07-16 11:50:58');
(5, 'Do czego służy array_keys()?', '2020-07-16 11:50:58');
(6, 'Do czego służy funkcja strpos()?', '2020-07-16 11:50:58');
(7, 'Który z poniższych elementów NIE jest prawidłowym operatorem porównania PHP?', '2020-07-16 11:50:58');
(8, 'Która z poniższych funkcji jest używana do przekierowania strony?', '2020-07-16 11:50:58');
(9, 'Który z poniższych elementów jest używany do ustawiania ciasteczek?', '2020-07-16 11:50:58');
(10, 'Który z poniższych elementów zawiera kod błędu związany z przesłaniem tego pliku?', '2020-07-16 11:50:58');
(11, 'Który z poniższych elementów jest obiektem JavaScript po stronie serwera?', '2020-07-16 11:50:58');
(12, 'Który znacznik jest używany, aby wstawić JavaScript do strony HTML?', '2020-07-16 11:50:58');
(13, 'Który z poniższych elementów jest używany w skrypcie Java do wstawiania znaków specjalnych?', '2020-07-16 11:50:58');
(14, 'Jaki jest właściwy sposób na napisanie tablicy JavaScript?', '2020-07-16 11:50:58');
(15, 'Który z poniższych sposobów jest poprawny do napisania "Hello World" na stronie internetowej?', '2020-07-16 11:50:58');
(16, 'Który atrybut należy zmienić, aby elementy były niewidoczne?', '2020-07-16 11:50:58');
(17, 'Który z poniższych sposobów jest nieprawidłowy przy podawaniu daty?', '2020-07-16 11:50:58');
(18, 'Jaki język służy do opisu zachowania strony internetowej?', '2020-07-16 11:50:58');
(19, 'Który z poniższych kodów kolorystycznych jest prawidłowy ?', '2020-07-16 11:50:58');
(20, 'Jak możemy zmienić rozmiar obrazu?', '2020-07-16 11:50:58');
(21, 'W przypadku ramek w formacie HTML, jak określić resztę ekranu?', '2020-07-16 11:50:58');
(22, 'Obiekt sessionStorage przechowuje dane dla __________', '2020-07-16 11:50:58');
(23, 'Jak można tworzyć zaokrąglone narożniki za pomocą CSS3?', '2020-07-16 11:50:58');
(24, 'Jak zmienić rozmiar obrazu tła za pomocą CSS3?', '2020-07-16 11:50:58');
(25, 'Który z poniższych sposobów jest właściwy do ustawienia rozmiaru czcionki?', '2020-07-16 11:50:58');
(26, 'Ile jest sposobów na zmianę szerokości elementu w jQuery?', '2020-07-16 11:50:58');
(27, 'Metoda ________ działa na obiekty JQuery i tłumaczy element dopasowania DOM na łańcuch zapytania, który może być przekazany wraz z żądaniem AJAX.', '2020-07-16 11:50:58');
(28, 'Która z poniższych metod klasy Exception zwraca nazwę pliku źródłowego?', '2020-07-16 11:50:58');
(29, 'Która z poniższych metod może być użyta do zamknięcia bazy danych MySql za pomocą PHP?', '2020-07-16 11:50:58');
(30, 'Który z poniższych atrybutów jest wykorzystywany do dodania linku do dowolnego elementu?', '2020-07-16 11:50:58');

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `created`, `password`) VALUES
(3, 'Lukasz', '2020-07-14 15:21:45', '$2y$10$MyQ9qr6OQ9vJS7Q.sPHvDu9.b/nmq9.qvBuFac20gh5W5eDjLnDnm'),
(7, 'Lukasz123', '2020-07-14 18:29:26', '$2y$10$tMvopsqCmrOG/zamzVLoyeSaY1pX098G.Y9foe1aN0Ox8urpTM5XK'),
(8, 'user2', '2020-07-16 12:16:24', '$2y$10$I1JkVHGgPlaEu2fVb3BNEevQd1gOI1uDYj3GF7OA5r1uNNjStbI6m'),
(9, 'user3', '2020-07-16 12:55:18', '$2y$10$iGQUkleSm3sx32j/GXLytutE60A/y8IB0nYjZTw0XhTUDnEatcKiK'),
(10, 'user4', '2020-07-16 14:01:10', '$2y$10$/d7A.upPurhgc2TtuWKZv.YvqLyFmy5s96lqcS6sgHxWI2srbpBOy');