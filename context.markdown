# Study Programs for IT Technologies 2019-2023

This document provides the structure of IT study programs, including Tronc Commun (TC) and specialized tracks: Développement des Systèmes d'Information (DSI), Multimédia et Développement Web (MDW), Systèmes Embarqués (SEM), and Réseaux et Services Informatiques (RSI). Each program consists of semesters, teaching units (UEs), and constituent courses (ECUEs) with associated credits and evaluation methods. The goal is to calculate student averages (moyennes) on a 0-20 scale.

## General Calculation Method

- **ECUE Grade Calculation**: Each ECUE (course) has one or more assessments (e.g., DC, DS, EC, ES) with weights summing to 100%. The ECUE grade is calculated as:
  - `ECUE_grade = sum(assessment_grade * weight)` where `assessment_grade` is on a 0-20 scale.
- **UE Grade Calculation**: Each UE (teaching unit) consists of one or more ECUEs, each with credits. The UE grade is the weighted average of its ECUE grades:
  - `UE_grade = sum(ECUE_grade * ECUE_credits) / sum(ECUE_credits)`
- **Semester Average**: Each semester has multiple UEs, each with credits. The semester average is the weighted average of UE grades:
  - `Semester_average = sum(UE_grade * UE_credits) / sum(UE_credits)` (typically 30 credits per semester)
- **Program Average**: The overall program average is the average of semester averages, as each semester has 30 credits:
  - `Program_average = sum(Semester_average) / number_of_semesters`
- **Note**: All grades are on a 0-20 scale.

### Handling Optional Units

For optional teaching units (denoted as **UE: OPT**, **Unité optionnelle**, or **Matières optionnelles**), the specific constituent courses (ECUEs) are chosen by the institution (ISET). These units appear across multiple semesters and programs, offering flexibility in the curriculum, and the ECUEs within them may vary in number, credits, or weighting.

- **ECUE Definition**: The institution defines the ECUEs, their credits, and their assessment methods for each optional unit.
- **Coefficients vs. Credits**: In some instances, the institution may provide coefficients for the ECUEs instead of directly specifying credits. These coefficients represent the relative weight of each ECUE within the UE.
- **Calculating Credits from Coefficients**: If coefficients are provided, the credits for each ECUE can be calculated proportionally based on the total UE credits:
  - `ECUE_credits = (coefficient / sum_of_coefficients) * total_UE_credits`
- **UE Grade Calculation**: The grade for the optional UE is the weighted average of its ECUE grades:
  - `UE_grade = sum(ECUE_grade * ECUE_credits) / total_UE_credits`
- **Alternative Calculation with Coefficients**: If using coefficients directly:
  - `UE_grade = sum(ECUE_grade * coefficient) / sum(coefficients)`
- **Equivalence**: Both methods (using credits or coefficients) yield the same result, as credits are proportional to coefficients.
- **Practical Note**: For grade calculation (e.g., on a website), users should input ECUE grades along with their respective credits, ensuring the sum of ECUE credits matches the total UE credits (e.g., 4, 5, or 7 credits depending on the semester and program). If the institution provides coefficients instead, users can convert them to credits using the formula above before inputting.

**Example**: For an optional unit with 7 credits (e.g., DSI Semester 4’s **Unité optionnelle**):
- If coefficients are 1.5 and 2 (sum = 3.5):
  - ECUE 1 credits = (1.5 / 3.5) * 7 ≈ 3 credits
  - ECUE 2 credits = (2 / 3.5) * 7 ≈ 4 credits
- If ECUE 1 grade = 14 and ECUE 2 grade = 16:
  - `UE_grade = (14 * 3 + 16 * 4) / 7 = (42 + 64) / 7 = 106 / 7 ≈ 15.14`
- Alternatively, using coefficients directly:
  - `UE_grade = (14 * 1.5 + 16 * 2) / 3.5 = (21 + 32) / 3.5 = 53 / 3.5 ≈ 15.14`

This approach applies to all optional units across all semesters and programs.

## Programs

### Tronc Commun (TC)

#### Semestre 1

- **UE: Mathématique appliquée 1** (4 credits)
  - **ECUE: Mathématique Appliquée** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Mathématiques Appliquées** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Algorithmique et Programmation I** (7 credits)
  - **ECUE: Algorithmique et programmation 1** (5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Programmation** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Architecture et système** (6 credits)
  - **ECUE: Architecture des Ordinateurs** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Systèmes Logiques** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Systèmes Logiques** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Développement web et multimédia I** (4 credits)
  - **ECUE: Développement web et multimédia I** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Développement Web et Multimédia I** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Culture et langues** (5 credits)
  - **ECUE: Technique d’expression 1** (1 credit)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Business Culture** (1 credit)
    - Assessments: EC (100%)
  - **ECUE: English for computing 1** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Certificat en Compétence Numérique** (1 credit)
    - Assessments: EC (100%)
- **UE: OPT** (4 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined

**Total credits**: 30

#### Semestre 2

- **UE: Mathématique appliquée II** (4 credits)
  - **ECUE: Recherche Opérationnelle** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Statistiques & Probabilités** (2 credits)
    - Assessments: DC (40%), DS (60%)
- **UE: Système I** (4 credits)
  - **ECUE: Systèmes d'Exploitation** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Systèmes I** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Algorithmique et Programmation II** (5 credits)
  - **ECUE: Algorithmique & Programmation II** (3 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier programmation II** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Développement web et multimédia II** (4 credits)
  - **ECUE: Développement web et multimédia II** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Développement Web et Multimédia II** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Technologie réseaux** (4 credits)
  - **ECUE: Fondements des Réseaux** (4 credits)
    - Assessments: DC (40%), DS (60%)
- **UE: Culture et langues** (4 credits)
  - **ECUE: Technique d’expression 2** (1 credit)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Préparation aux métiers** (1 credit)
    - Assessments: EC (100%)
  - **ECUE: English for computing 2** (2 credits)
    - Assessments: DC (40%), DS (60%)
- **UE: Opt** (5 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 1 credit)
    - Assessments: To be defined

**Total credits**: 30

### Développement des Systèmes d'Information (DSI)

#### Semestre 3

- **UE: Base de données** (4 credits)
  - **ECUE: Bases de Données** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Base de Données** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Conception Objet** (4 credits)
  - **ECUE: Modélisation Objet (UML2)** (4 credits)
    - Assessments: DC (40%), DS (60%)
- **UE: Programmation Objet** (5 credits)
  - **ECUE: Programmation Objet** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier de Programmation Objet** (3 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Développement Web (s3)** (4 credits)
  - **ECUE: Atelier framework Coté Client** (2 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Atelier Développement web coté serveur** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Communication et langues** (6 credits)
  - **ECUE: Droit de l'informatique et propriétés intellectuelles** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: High tech english** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Communication en entreprise** (2 credits)
    - Assessments: EC (100%)
- **UE: Unité optionnelle** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30

#### Semestre 4

- **UE: Développement web (s4)** (4 credits)
  - **ECUE: Projet d’Intégration** (2 credits)
    - Assessments: DS (100%)
  - **ECUE: Atelier framework coté serveur** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Architecture Logicielle** (4 credits)
  - **ECUE: Architecture logicielle** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Environnement de Développement** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Programmation Objet Avancée** (4.5 credits)
  - **ECUE: Programmation Objet Avancée** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Programmation Objet Avancée** (3 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: SGBD** (4.5 credits)
  - **ECUE: SGBD** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier SGBD** (3 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Cultures et Langues** (6 credits)
  - **ECUE: Préparation à la certification en français** (2 credits)
    - Assessments: EC (100%)
  - **ECUE: Business english** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Etude et management de projets innovants** (2 credits)
    - Assessments: EC (100%)
- **UE: Unité optionnelle** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 4 credits)
    - Assessments: To be defined

**Total credits**: 30

#### Semestre 5

- **UE: SOA (Architecture orientée service)** (5 credits)
  - **ECUE: SOA** (3 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier SOA** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Gestion de Données Avancées** (4 credits)
  - **ECUE: Gestion des données Massives** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Base de Données Avancée** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Méthodologie de Conception** (4 credits)
  - **ECUE: Méthodologie de Conception Objet** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Projet d’Intégration** (2 credits)
    - Assessments: EC (100%)
- **UE: Développement mobile et web** (6 credits)
  - **ECUE: Développement Mobile** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier développement Mobile natif** (2 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Atelier Framework cross-platform** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Cultures et Langues** (4 credits)
  - **ECUE: Preparing TOEIC** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Technique de recherche d'emploi et marketing de soi** (2 credits)
    - Assessments: EC (100%)
- **UE: Unité optionnelle** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30

### Multimédia et Développement Web (MDW)

#### Semestre 3

- **UE: Systèmes et réseaux** (4 credits)
  - **ECUE: Administration Systèmes et Services** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Administration Systèmes et Services** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Bases de Données** (4 credits)
  - **ECUE: Bases de Données** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Bases de Données** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Programmation Objet** (4 credits)
  - **ECUE: Programmation Objet** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier de Programmation Objet** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Développement Web et édition multimédia** (5 credits)
  - **ECUE: Développement Framework Coté Client** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Développement Framework Coté Client** (1.5 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Atelier Trait. de Données Multimédias** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Culture et Langues III** (6 credits)
  - **ECUE: Droit de l'informatique et propriétés intellectuelles** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: High tech english** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Communication en entreprise** (2 credits)
    - Assessments: EC (100%)
- **UE: Matières optionnelles** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30

#### Semestre 4

- **UE: Intégration et sécurité des applications web** (4 credits)
  - **ECUE: Atelier Design et Integration pour le Web** (2 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Sécurité des applications web** (2 credits)
    - Assessments: DC (40%), DS (60%)
- **UE: Développement web coté serveur** (4 credits)
  - **ECUE: Développement Coté Serveur** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Développement Coté Serveur** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Programmation Objet Avancée** (4 credits)
  - **ECUE: Atelier SGBD** (1 credit)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Programmation Objet avancée** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Programmation Objet avancée** (1.5 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Développement graphique 2D et 3D** (5 credits)
  - **ECUE: Atelier outil d'animation 3D** (1.5 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Programmation Graphique 2D-3D** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Programmation Graphique 2D** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Culture et Langues IV** (6 credits)
  - **ECUE: Préparation à la certification en français** (2 credits)
    - Assessments: DS (100%)
  - **ECUE: Business english** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Etude et management de projets innovants** (2 credits)
    - Assessments: EC (100%)
- **UE: Matières optionnelles** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30

#### Semestre 5

- **UE: Développement Mobile** (4 credits)
  - **ECUE: Développement Mobile** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Développement Mobile** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Développement Web** (4 credits)
  - **ECUE: Atelier SOA** (2 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Atelier Framework Côté Serveur** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Projet web et multimédia** (5 credits)
  - **ECUE: Conception Orientée Objet et méthodes agiles** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Projet d'intégration** (3 credits)
    - Assessments: EC (100%)
- **UE: Développement 3D avancé** (6 credits)
  - **ECUE: Atelier Réalité virtuelle et augmentée** (2 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Réalité augmentée et programmation 3D** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier programmation multimédia 3D** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Culture et Langues V** (4 credits)
  - **ECUE: Preparing TOEIC** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Technique de Recherche d’emploi et Marketing de soi** (2 credits)
    - Assessments: EC (100%)
- **UE: Matières optionnelles** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30

### Systèmes Embarqués (SEM)

#### Semestre 3

- **UE: Systèmes embarqués et électroniques** (5 credits)
  - **ECUE: Systèmes d'exploitation pour l'embarqué** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Systèmes d'exploitation pour l'embarqué** (1.5 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Atelier Systèmes électroniques** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Réseaux et services** (4 credits)
  - **ECUE: Protocoles et services réseaux** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier protocoles et services réseaux** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Base de données** (4 credits)
  - **ECUE: Bases de Données** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Bases de Données** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Programmation orientée objet** (4 credits)
  - **ECUE: Programmation Objet** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier de Programmation Objet** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Culture et Langues III** (6 credits)
  - **ECUE: Droit de l'informatique et propriétés intellectuelles** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: High tech english** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Communication en entreprise** (2 credits)
    - Assessments: EC (100%)
- **UE: Matières optionnelles** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30

#### Semestre 4

- **UE: Systèmes numériques** (4 credits)
  - **ECUE: Circuits numériques** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Circuits numériques** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Microcontrôleur** (4 credits)
  - **ECUE: Atelier microcontrôleur** (4 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Développement Coté Serveur** (5 credits)
  - **ECUE: Modélisation Objet (UML2.0)** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Développement Web Coté serveur** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Développement Web Coté serveur** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Développement Mobile I** (4 credits)
  - **ECUE: Développement d'applications mobiles natives** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Développement d'applications mobiles natives** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Culture et Langues IV** (6 credits)
  - **ECUE: Préparation à la certification en français** (2 credits)
    - Assessments: DS (100%)
  - **ECUE: Business english** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Etude et management de projets innovants** (2 credits)
    - Assessments: EC (100%)
- **UE: Matières optionnelles** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30

#### Semestre 5

- **UE: Projet d'application embarquée et SoC** (5 credits)
  - **ECUE: Atelier Prototypage Rapides des Applications Embarqués** (2.5 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Atelier SoC** (2.5 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Développement Mobile avancé** (5 credits)
  - **ECUE: Développement Mobile avancé** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Développement Mobile avancé** (3 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: IoT** (5 credits)
  - **ECUE: Fondements IoT** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier IoT** (3 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Modélisation et programmation web** (4 credits)
  - **ECUE: Atelier services web** (2 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Atelier Intégration et déploiement web** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Culture et Langues IV** (4 credits)
  - **ECUE: Preparing TOEIC** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Technique de Recherche d’emploi et Marketing de soi** (2 credits)
    - Assessments: EC (100%)
- **UE: Matières optionnelles** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30

### Réseaux et Services Informatiques (RSI)

#### Semestre 3

- **UE: Administration Systèmes** (4 credits)
  - **ECUE: Atelier Administration Systèmes** (4 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Réseaux locaux d'entreprises** (5 credits)
  - **ECUE: Réseaux Locaux et architecture TCP/IP** (2.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Réseaux locaux et TCP/IP** (2.5 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Base de données** (4 credits)
  - **ECUE: Bases de Données** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier bases de données** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Conception et Programmation orienté Objet** (4 credits)
  - **ECUE: Programmation Objet** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Programmation Objet** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Communication et langues** (6 credits)
  - **ECUE: Droit de l'informatique et propriétés intellectuelles** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: High tech english** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Communication en entreprise** (2 credits)
    - Assessments: EC (100%)
- **UE: Unité optionnelle - Certification** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30

#### Semestre 4

- **UE: Interconnexion des Réseaux** (4.5 credits)
  - **ECUE: Routage IP** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Protocole IPv6** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Interconnexion des Réseaux** (1.5 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Administration des Services réseaux** (4 credits)
  - **ECUE: Administration des services réseaux** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Administration des services réseau** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Virtualisation et Cloud Computing** (4.5 credits)
  - **ECUE: Introduction virtualisation et cloud** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier virtualisation et cloud** (1.5 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Projet d’Intégration** (1.5 credits)
    - Assessments: EC (100%)
- **UE: Administration des Bases de Données** (4 credits)
  - **ECUE: Administration BD** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Administration BD** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Cultures et Langues** (6 credits)
  - **ECUE: Préparation à la certification en français** (2 credits)
    - Assessments: DS (100%)
  - **ECUE: Business english** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Etude et management de projets innovants** (2 credits)
    - Assessments: EC (100%)
- **UE: Unité optionnelle - Certification** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30

#### Semestre 5

- **UE: Les nouvelles technologies des réseaux Etendus** (5 credits)
  - **ECUE: Introduction à l’Internet des Objets** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Technologies WAN** (1.5 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Technologies WAN** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Sécurité systèmes et réseaux** (5 credits)
  - **ECUE: Sécurité systèmes et réseaux** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier Sécurité Systèmes et réseaux** (3 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Cloud Computing avancé** (4 credits)
  - **ECUE: Gestion d’un Data Center** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Atelier cloud Computing (PaaS, SaaS)** (2 credits)
    - Assessments: EC (50%), ES (50%)
- **UE: Projet d’Intégration** (5 credits)
  - **ECUE: Atelier conception et gestion de projets** (2 credits)
    - Assessments: EC (50%), ES (50%)
  - **ECUE: Projet d’Intégration Infrastructures Réseaux et Systèmes** (3 credits)
    - Assessments: EC (100%)
- **UE: Cultures et Langues** (4 credits)
  - **ECUE: Preparing TOEIC** (2 credits)
    - Assessments: DC (40%), DS (60%)
  - **ECUE: Technique de recherche d'emploi et marketing de soi** (2 credits)
    - Assessments: EC (100%)
- **UE: Unité optionnelle - Certification** (7 credits)
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 2 credits)
    - Assessments: To be defined
  - **ECUE: à choisir par l'ISET** (e.g., 3 credits)
    - Assessments: To be defined

**Total credits**: 30