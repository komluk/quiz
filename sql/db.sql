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
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `value` varchar(250) NOT NULL,
  `correct` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `question_id`, `value`, `correct`) VALUES
(1, 1, 'Answer 1_1', 1),
(2, 1, 'Answer 1_2', 0),
(3, 1, 'Answer 1_3', 0),
(4, 1, 'Answer 1_4', 0),
(5, 2, 'Answer 2_1', 1),
(6, 2, 'Answer 2_2', 0),
(7, 2, 'Answer 2_3', 0),
(8, 2, 'Answer 2_4', 0),
(9, 3, 'Answer 3_1', 1),
(10, 3, 'Answer 3_2', 0),
(11, 3, 'Answer 3_3', 0),
(12, 3, 'Answer 3_4', 0);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `value` text NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `value`, `created`) VALUES
(1, 'Sample question 1', '2020-07-16 11:50:58'),
(2, 'Sample question 2', '2020-07-16 11:50:58'),
(3, 'Sample question 3', '2020-07-16 11:50:58');

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `user_id`, `question_id`, `answer_id`) VALUES
(1, 3, 1, 1),
(2, 3, 2, 1),
(3, 3, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(265) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `created`, `password`) VALUES
(3, 'Lukasz', '2020-07-14 15:21:45', '$2y$10$MyQ9qr6OQ9vJS7Q.sPHvDu9.b/nmq9.qvBuFac20gh5W5eDjLnDnm'),
(7, 'Lukasz123', '2020-07-14 18:29:26', '$2y$10$tMvopsqCmrOG/zamzVLoyeSaY1pX098G.Y9foe1aN0Ox8urpTM5XK'),
(8, 'user2', '2020-07-16 12:16:24', '$2y$10$I1JkVHGgPlaEu2fVb3BNEevQd1gOI1uDYj3GF7OA5r1uNNjStbI6m'),
(9, 'user3', '2020-07-16 12:55:18', '$2y$10$iGQUkleSm3sx32j/GXLytutE60A/y8IB0nYjZTw0XhTUDnEatcKiK'),
(10, 'user4', '2020-07-16 14:01:10', '$2y$10$/d7A.upPurhgc2TtuWKZv.YvqLyFmy5s96lqcS6sgHxWI2srbpBOy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
