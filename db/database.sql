-- mydb.moneyLost_year_month definition

CREATE TABLE `moneyLost_year_month` (
  `myYear` varchar(4) DEFAULT NULL,
  `myMonth` varchar(20) DEFAULT NULL,
  `amount` decimal(18,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO moneyLost_year_month (myYear, myMonth, amount)
VALUES
    (2024, 'January', 32401522.59),
    (2024, 'February', 22877332.75),
    (2024, 'March', 0),
    (2024, 'April', 0),
    (2024, 'May', 0),
    (2024, 'June', 0),
    (2024, 'July', 0),
    (2024, 'August', 0),
    (2024, 'September', 0),
    (2024, 'October', 0),
    (2024, 'November', 0),
    (2024, 'December', 0),
    (2023, 'January', 53326714),
    (2023, 'February', 43177181),
    (2023, 'March', 45305693),
    (2023, 'April', 51468112),
    (2023, 'May', 53286168),
    (2023, 'June', 38108516),
    (2023, 'July', 42363317),
    (2023, 'August', 38587921),
    (2023, 'September', 29034040),
    (2023, 'October', 31325940),
    (2023, 'November', 25694370),
    (2023, 'December', 25100144),
    (2022, 'January', 33100983),
    (2022, 'February', 37868474),
    (2022, 'March', 95111417),
    (2022, 'April', 37130813),
    (2022, 'May', 51288138),
    (2022, 'June', 37608394),
    (2022, 'July', 42789612),
    (2022, 'August', 44715365),
    (2022, 'September', 43521062),
    (2022, 'October', 49252483),
    (2022, 'November', 51716704),
    (2022, 'December', 43281859),
    (2021, 'January', 21789601),
    (2021, 'February', 20799912),
    (2021, 'March', 20177188),
    (2021, 'April', 14083383),
    (2021, 'May', 29889848),
    (2021, 'June', 31154787),
    (2021, 'July', 27142382),
    (2021, 'August', 26263533),
    (2021, 'September', 29914726),
    (2021, 'October', 25829900),
    (2021, 'November', 33446944),
    (2021, 'December', 43231255),
    (2020, 'January', 7382116),
    (2020, 'February', 14494336),
    (2020, 'March', 15899322),
    (2020, 'April', 16089486),
    (2020, 'May', 12574900),
    (2020, 'June', 13503783),
    (2020, 'July', 12117579),
    (2020, 'August', 12299628),
    (2020, 'September', 16949349),
    (2020, 'October', 13484029),
    (2020, 'November', 18563171),
    (2020, 'December', 22313886);

-- mydb.reportsNum_gender_byYear definition

CREATE TABLE `reportsNum_gender_byYear` (
  `myYear` varchar(10) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `amount` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO reportsNum_gender_byYear (myYear, gender, amount)
VALUES
    (2024, 'Male', 20457),
    (2024, 'Female', 21644),
    (2024, 'Other', 3001),
    (2023, 'Male', 147261),
    (2023, 'Female', 148584),
    (2023, 'Other', 5908),
    (2022, 'Male', 112975),
    (2022, 'Female', 120418),
    (2022, 'Other', 5846),
    (2021, 'Male', 138589),
    (2021, 'Female', 142092),
    (2021, 'Other', 5941),
    (2020, 'Male', 103057),
    (2020, 'Female', 108994),
    (2020, 'Other', 4035);

-- mydb.scam_by_age_year definition

CREATE TABLE `scam_by_age_year` (
  `myYear` year DEFAULT NULL,
  `age_group` varchar(10) DEFAULT NULL,
  `amount` decimal(18,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO scam_by_age_year (myYear, age_group, amount)
VALUES
    (2024, '65+', 10633180.88),
    (2024, '55-64', 8436849.68),
    (2024, '45-54', 12114671.23),
    (2024, '35-44', 11993405.57),
    (2024, '25-34', 2339871.05),
    (2024, '18-24', 1146306.01),
    (2024, 'under18', 0),
    (2023, '65+', 119312653),
    (2023, '55-64', 88625637),
    (2023, '45-54', 79903700),
    (2023, '35-44', 66364891),
    (2023, '25-34', 43258362),
    (2023, '18-24', 14933685),
    (2023, 'under18', 350805),
    (2022, '65+', 112231227),
    (2022, '55-64', 88243240),
    (2022, '45-54', 81500002),
    (2022, '35-44', 82204525),
    (2022, '25-34', 55310521),
    (2022, '18-24', 15785411),
    (2022, 'under18', 356284),
    (2021, '65+', 77670430),
    (2021, '55-64', 51089422),
    (2021, '45-54', 53760156),
    (2021, '35-44', 44297131),
    (2021, '25-34', 37385810),
    (2021, '18-24', 12432896),
    (2021, 'under18', 465269),
    (2020, '65+', 37188836),
    (2020, '55-64', 21320513),
    (2020, '45-54', 22187013),
    (2020, '35-44', 23827033),
    (2020, '25-34', 22859366),
    (2020, '18-24', 10417466),
    (2020, 'under18', 496156);

-- mydb.top10_scam__moneyLost_by_year definition

CREATE TABLE `top10_scam__moneyLost_by_year` (
  `myYear` int DEFAULT NULL,
  `scam_type` varchar(50) DEFAULT NULL,
  `amount` decimal(18,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO top10_scam__moneyLost_by_year (myYear, scam_type, amount)
VALUES
    (2024, 'Investment', 31553591.5),
    (2024, 'Job&Employment', 7876862.91),
    (2024, 'Dating&Romance', 4042864.3),
    (2024, 'Phishing', 2486525.8),
    (2024, 'False Billing', 1921950.7),
    (2024, 'Threats&Extortion', 1910186),
    (2024, 'Remote access', 1321352.7),
    (2024, 'Identity Theft', 1307791.2),
    (2024, 'Classified Scam', 739077.9),
    (2024, 'Online Shopping', 678237.3),
    (2023, 'Investment', 291871800),
    (2023, 'Dating&Romance', 34344656),
    (2023, 'False Billing', 28007778),
    (2023, 'Phishing', 25896634),
    (2023, 'Job&Employment', 24354665),
    (2023, 'Remote access', 15531884),
    (2023, 'Threats&Extortion', 13868632),
    (2023, 'Identity Theft', 8598636),
    (2023, 'Rebate', 8200750),
    (2023, 'Classified Scam', 7761740),
    (2022, 'Investment', 375997460),
    (2022, 'Dating&Romance', 40675825),
    (2022, 'False Billing', 25312185),
    (2022, 'Phishing', 24617192),
    (2022, 'Remote access', 21744454),
    (2022, 'Threats&Extortion', 13934433),
    (2022, 'Identity Theft', 10738029),
    (2022, 'Job&Employment', 9695719),
    (2022, 'Online Shopping', 9261357),
    (2022, 'Classified Scam', 8465343),
    (2021, 'Investment', 177184295),
    (2021, 'Dating&Romance', 56175428),
    (2021, 'False Billing', 17303665),
    (2021, 'Remote access', 16412258),
    (2021, 'Threats&Extortion', 11077551),
    (2021, 'Identity Theft', 10159930),
    (2021, 'Online Shopping', 8074211),
    (2021, 'Classified Scam', 7114830),
    (2021, 'Phishing', 4324128),
    (2021, 'Hacking', 3041484),
    (2020, 'Investment', 65802807),
    (2020, 'Dating&Romance', 38916120),
    (2020, 'False Billing', 18464903),
    (2020, 'Threats&Extortion', 11833508),
    (2020, 'Remote access', 8441632),
    (2020, 'Online Shopping', 7384733),
    (2020, 'Classified Scam', 5529413),
    (2020, 'Health&Medical products', 3915689),
    (2020, 'Identity Theft', 3072287),
    (2020, 'Unexpected prize&lottery', 1706253);

-- mydb.top10_scam_by_year definition

CREATE TABLE `top10_scam_by_year` (
  `myYear` int DEFAULT NULL,
  `scam_type` varchar(50) DEFAULT NULL,
  `amount` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO top10_scam_by_year (myYear, scam_type, amount)
VALUES
    (2024, 'Phishing', 18626),
    (2024, 'False Billing', 5354),
    (2024, 'Online Shopping', 3170),
    (2024, 'Identity Theft', 3031),
    (2024, 'Classified Scam', 1695),
    (2024, 'Hacking', 1562),
    (2024, 'Remote access', 1197),
    (2024, 'Investment', 1116),
    (2024, 'Threats&Extortion', 841),
    (2024, 'Rebate', 783),
    (2023, 'Phishing', 108624),
    (2023, 'False Billing', 395894),
    (2023, 'Online Shopping', 21346),
    (2023, 'Identity Theft', 19895),
    (2023, 'Hacking', 12446),
    (2023, 'Classified Scam', 11534),
    (2023, 'Remote access', 8975),
    (2023, 'Investment', 8161),
    (2023, 'Rebate', 7123),
    (2023, 'Threats&Extortion', 5608),
    (2022, 'Phishing', 74575),
    (2022, 'False Billing', 27489),
    (2022, 'Online Shopping', 17886),
    (2022, 'Identity Theft', 16213),
    (2022, 'Remote access', 11792),
    (2022, 'Hacking', 11772),
    (2022, 'Classified Scam', 10649),
    (2022, 'Investment', 9361),
    (2022, 'Rebate', 4475),
    (2022, 'Dating&Romance', 3699),
    (2021, 'Phishing', 71310),
    (2021, 'Threats&Extortion', 32426),
    (2021, 'Identity Theft', 22354),
    (2021, 'False Billing', 21546),
    (2021, 'Online Shopping', 20693),
    (2021, 'Remote access', 15698),
    (2021, 'Hacking', 15141),
    (2021, 'Investment', 9663),
    (2021, 'Classified Scam', 9561),
    (2021, 'Unexpected prize&lottery', 4428),
    (2020, 'Phishing', 44079),
    (2020, 'Threats&Extortion', 32215),
    (2020, 'Identity Theft', 20939),
    (2020, 'Online Shopping', 15306),
    (2020, 'False Billing', 13120),
    (2020, 'Hacking', 8691),
    (2020, 'Remote access', 8472),
    (2020, 'Classified Scam', 7928),
    (2020, 'Investment', 7295),
    (2020, 'Unexpected prize&lottery', 4543);

    -- mydb.tips definition

CREATE TABLE `tips` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO tips(title, content, category) values
('Check the Sender''s Details', 'Always examine the sender''s email address or contact information carefully. Many phishing attempts use email addresses that resemble those from reputable companies but often have small typos or different domains.', 'phishing'),
('Look for Urgency or Threats', 'Phishers often create a sense of urgency or use threats to prompt a hasty response. Be wary of emails or messages that pressure you to act quickly to verify your account or update your information.', 'phishing'),
('Avoid Clicking on Unsolicited Links', 'If you receive a link in an unexpected email or message, do not click on it directly. Instead, go to the website by typing the URL directly into your browser or using a bookmark you have previously saved.', 'phishing'),
('Use Multi-Factor Authentication', 'Enable multi-factor authentication (MFA) on all accounts that support it. MFA adds an additional layer of security by requiring two or more credentials to log in, which makes it harder for phishers to gain access to your information.', 'phishing'),
('Research the Investment and Company','Always conduct thorough research on any investment opportunity and the company behind it. Check their credentials, registration status, and whether they are licensed by relevant financial authorities.','investments'),
('Seek Independent Advice','Before making any investment, consult with an independent financial advisor or a trusted expert. They can provide a second opinion and help assess the legitimacy and suitability of the investment.','investments'),
('Beware of High Returns with Little or No Risk','Be skeptical of any investment that offers high returns with little or no risk. These are often red flags for scams, as all investments carry some level of risk.','investments'),
('Avoid Pressure Tactics','Steer clear of investments that require you to act quickly or pressure you with limited-time offers. Legitimate investments do not need high-pressure sales tactics.','investments'),
('Understand the Investment Completely','Make sure you fully understand how the investment works, the fees involved, and any terms and conditions before committing your money. Lack of clear, understandable information is often a sign of a scam.','investments'),
('Verify Their Identity','Make sure the person you''re communicating with is who they say they are. You can ask them to video chat, or check their social media profiles to ensure their online presence matches what they tell you.','chatting'),
('Be Cautious with Personal Information','Avoid sharing too much personal information early on. Scammers can use details like your address, birthdate, and social security number to steal your identity.','chatting'),
('Watch for Love Bombing','Be wary of someone who expresses strong emotions or makes grand romantic gestures quickly without ever meeting you. This can be a tactic to manipulate you.','chatting'),
('Never Send Money','Do not send money or provide your financial details to someone you''ve only met online, no matter how convincing their story might be.','chatting'),
('Listen to Friends and Family','If your friends or family express concern about your online relationship, take their worries seriously. Sometimes an outside perspective can recognize red flags that you might have missed.','chatting');

-- mydb.tips_card definition

CREATE TABLE `tips_card` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `subtitle` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`,`category`),
  UNIQUE KEY `tips_card_UN` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO tips_card (title,subtitle,category,image_url) VALUES
('Phishing Prevention Playbook: How to Spot and Avoid Online Scams','Empowering Internet Users to Safeguard Against Fraudulent Websites','phishing','/src/assets/istockphoto-1346734927-612x612.jpg'),
('Safeguarding Investments: A Guide to Spotting Scams','Empowering Investors to Detect Deception, Protect Wealth, and Achieve Steady Growth','investments','/src/assets/case2.jpg'),
('Navigating Online Romance Safely: A Guide to Avoiding Scams','Empowering Hearts to Find Love While Dodging Deception','chatting','/src/assets/case3.jpg');