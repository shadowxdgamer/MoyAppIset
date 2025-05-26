// Data structure containing all IT programs and their structure
export const programs = {
    TC: {
        name: "Tronc Commun",
        semesters: {
            1: {
                name: "Semestre 1",
                ues: {
                    "math1": {
                        name: "Mathématique appliquée 1",
                        credits: 4,
                        ecues: {
                            "math_app": {
                                name: "Mathématique Appliquée",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_math": {
                                name: "Atelier Mathématiques Appliquées",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "algo1": {
                        name: "Algorithmique et Programmation I",
                        credits: 7,
                        ecues: {
                            "algo_prog1": {
                                name: "Algorithmique et programmation 1",
                                credits: 5,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_prog": {
                                name: "Atelier Programmation",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "arch_sys": {
                        name: "Architecture et système",
                        credits: 6,
                        ecues: {
                            "arch_ord": {
                                name: "Architecture des Ordinateurs",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "sys_log": {
                                name: "Systèmes Logiques",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_sys_log": {
                                name: "Atelier Systèmes Logiques",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "dev_web1": {
                        name: "Développement web et multimédia I",
                        credits: 4,
                        ecues: {
                            "dev_web_multi1": {
                                name: "Développement web et multimédia I",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_dev_web1": {
                                name: "Atelier Développement Web et Multimédia I",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "culture_lang": {
                        name: "Culture et langues",
                        credits: 5,
                        ecues: {
                            "tech_expr1": {
                                name: "Technique d'expression 1",
                                credits: 1,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "business_culture": {
                                name: "Business Culture",
                                credits: 1,
                                assessments: { EC: 100 }
                            },
                            "english1": {
                                name: "English for computing 1",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "cert_num": {
                                name: "Certificat en Compétence Numérique",
                                credits: 1,
                                assessments: { EC: 100 }
                            }
                        }
                    },
                    "opt": {
                        name: "OPT",
                        credits: 4,
                        isOptional: true,
                        ecues: {}
                    }
                }
            },
            2: {
                name: "Semestre 2",
                ues: {
                    "math2": {
                        name: "Mathématique appliquée II",
                        credits: 4,
                        ecues: {
                            "rech_op": {
                                name: "Recherche Opérationnelle",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "stat_prob": {
                                name: "Statistiques & Probabilités",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            }
                        }
                    },
                    "sys1": {
                        name: "Système I",
                        credits: 4,
                        ecues: {
                            "sys_exploit": {
                                name: "Systèmes d'Exploitation",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_sys1": {
                                name: "Atelier Systèmes I",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "algo2": {
                        name: "Algorithmique et Programmation II",
                        credits: 5,
                        ecues: {
                            "algo_prog2": {
                                name: "Algorithmique & Programmation II",
                                credits: 3,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_prog2": {
                                name: "Atelier programmation II",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "dev_web2": {
                        name: "Développement web et multimédia II",
                        credits: 4,
                        ecues: {
                            "dev_web_multi2": {
                                name: "Développement web et multimédia II",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_dev_web2": {
                                name: "Atelier Développement Web et Multimédia II",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "tech_reseaux": {
                        name: "Technologie réseaux",
                        credits: 4,
                        ecues: {
                            "fond_reseaux": {
                                name: "Fondements des Réseaux",
                                credits: 4,
                                assessments: { DC: 40, DS: 60 }
                            }
                        }
                    },
                    "culture_lang2": {
                        name: "Culture et langues",
                        credits: 4,
                        ecues: {
                            "tech_expr2": {
                                name: "Technique d'expression 2",
                                credits: 1,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "prep_metiers": {
                                name: "Préparation aux métiers",
                                credits: 1,
                                assessments: { EC: 100 }
                            },
                            "english2": {
                                name: "English for computing 2",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            }
                        }
                    },
                    "opt2": {
                        name: "Opt",
                        credits: 5,
                        isOptional: true,
                        ecues: {}
                    }
                }
            }
        }
    },
    DSI: {
        name: "Développement des Systèmes d'Information",
        semesters: {
            3: {
                name: "Semestre 3",
                ues: {
                    "bd": {
                        name: "Base de données",
                        credits: 4,
                        ecues: {
                            "bd_cours": {
                                name: "Bases de Données",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_bd": {
                                name: "Atelier Base de Données",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "conception_obj": {
                        name: "Conception Objet",
                        credits: 4,
                        ecues: {
                            "uml": {
                                name: "Modélisation Objet (UML2)",
                                credits: 4,
                                assessments: { DC: 40, DS: 60 }
                            }
                        }
                    },
                    "prog_obj": {
                        name: "Programmation Objet",
                        credits: 5,
                        ecues: {
                            "prog_obj_cours": {
                                name: "Programmation Objet",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_prog_obj": {
                                name: "Atelier de Programmation Objet",
                                credits: 3,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "dev_web_s3": {
                        name: "Développement Web (s3)",
                        credits: 4,
                        ecues: {
                            "framework_client": {
                                name: "Atelier framework Coté Client",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            },
                            "dev_web_serveur": {
                                name: "Atelier Développement web coté serveur",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "comm_lang": {
                        name: "Communication et langues",
                        credits: 6,
                        ecues: {
                            "droit_info": {
                                name: "Droit de l'informatique et propriétés intellectuelles",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "high_tech_english": {
                                name: "High tech english",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "comm_entreprise": {
                                name: "Communication en entreprise",
                                credits: 2,
                                assessments: { EC: 100 }
                            }
                        }
                    },
                    "unite_opt": {
                        name: "Unité optionnelle",
                        credits: 7,
                        isOptional: true,
                        ecues: {}
                    }
                }
            },
            4: {
                name: "Semestre 4",
                ues: {
                    "dev_web_s4": {
                        name: "Développement web (s4)",
                        credits: 4,
                        ecues: {
                            "projet_integration": {
                                name: "Projet d'Intégration",
                                credits: 2,
                                assessments: { DS: 100 }
                            },
                            "framework_serveur": {
                                name: "Atelier framework coté serveur",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "arch_log": {
                        name: "Architecture Logicielle",
                        credits: 4,
                        ecues: {
                            "arch_log_cours": {
                                name: "Architecture logicielle",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_env_dev": {
                                name: "Atelier Environnement de Développement",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "prog_obj_av": {
                        name: "Programmation Objet Avancée",
                        credits: 4.5,
                        ecues: {
                            "prog_obj_av_cours": {
                                name: "Programmation Objet Avancée",
                                credits: 1.5,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_prog_obj_av": {
                                name: "Atelier Programmation Objet Avancée",
                                credits: 3,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "sgbd": {
                        name: "SGBD",
                        credits: 4.5,
                        ecues: {
                            "sgbd_cours": {
                                name: "SGBD",
                                credits: 1.5,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_sgbd": {
                                name: "Atelier SGBD",
                                credits: 3,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "cult_lang": {
                        name: "Cultures et Langues",
                        credits: 6,
                        ecues: {
                            "prep_cert_fr": {
                                name: "Préparation à la certification en français",
                                credits: 2,
                                assessments: { EC: 100 }
                            },
                            "business_english": {
                                name: "Business english",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "etude_management": {
                                name: "Etude et management de projets innovants",
                                credits: 2,
                                assessments: { EC: 100 }
                            }
                        }
                    },
                    "unite_opt2": {
                        name: "Unité optionnelle",
                        credits: 7,
                        isOptional: true,
                        ecues: {}
                    }
                }
            },
            5: {
                name: "Semestre 5",
                ues: {
                    "soa": {
                        name: "SOA (Architecture orientée service)",
                        credits: 5,
                        ecues: {
                            "soa_cours": {
                                name: "SOA",
                                credits: 3,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "atelier_soa": {
                                name: "Atelier SOA",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "gestion_donnees": {
                        name: "Gestion de Données Avancées",
                        credits: 4,
                        ecues: {
                            "donnees_massives": {
                                name: "Gestion des données Massives",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "bd_avancee": {
                                name: "Atelier Base de Données Avancée",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "methodo_conception": {
                        name: "Méthodologie de Conception",
                        credits: 4,
                        ecues: {
                            "methodo_obj": {
                                name: "Méthodologie de Conception Objet",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "projet_integration2": {
                                name: "Projet d'Intégration",
                                credits: 2,
                                assessments: { EC: 100 }
                            }
                        }
                    },
                    "dev_mobile_web": {
                        name: "Développement mobile et web",
                        credits: 6,
                        ecues: {
                            "dev_mobile": {
                                name: "Développement Mobile",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "mobile_natif": {
                                name: "Atelier développement Mobile natif",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            },
                            "framework_cross": {
                                name: "Atelier Framework cross-platform",
                                credits: 2,
                                assessments: { EC: 50, ES: 50 }
                            }
                        }
                    },
                    "cult_lang2": {
                        name: "Cultures et Langues",
                        credits: 4,
                        ecues: {
                            "toeic": {
                                name: "Preparing TOEIC",
                                credits: 2,
                                assessments: { DC: 40, DS: 60 }
                            },
                            "recherche_emploi": {
                                name: "Technique de recherche d'emploi et marketing de soi",
                                credits: 2,
                                assessments: { EC: 100 }
                            }
                        }
                    },
                    "unite_opt3": {
                        name: "Unité optionnelle",
                        credits: 7,
                        isOptional: true,
                        ecues: {}
                    }
                }
            }
        }
    }
    // Additional programs (MDW, SEM, RSI) would be added here following the same structure
};

// Grade calculation utilities
export const calculateECUEGrade = (assessments, grades) => {
    let totalWeightedGrade = 0;
    let totalWeight = 0;

    for (const [assessment, weight] of Object.entries(assessments)) {
        if (grades[assessment] !== undefined && grades[assessment] !== '') {
            totalWeightedGrade += parseFloat(grades[assessment]) * weight / 100;
            totalWeight += weight;
        }
    }

    return totalWeight === 0 ? 0 : (totalWeightedGrade * 100) / totalWeight;
};

export const calculateUEGrade = (ecues, ecueGrades) => {
    let totalWeightedGrade = 0;
    let totalCredits = 0;

    for (const [ecueId, ecue] of Object.entries(ecues)) {
        if (ecueGrades[ecueId] !== undefined && ecueGrades[ecueId] !== 0) {
            totalWeightedGrade += ecueGrades[ecueId] * ecue.credits;
            totalCredits += ecue.credits;
        }
    }

    return totalCredits === 0 ? 0 : totalWeightedGrade / totalCredits;
};

export const calculateSemesterAverage = (semester, grades) => {
    let totalWeightedGrade = 0;
    let totalCredits = 0;
    let hasGrades = false;

    Object.entries(semester.ues).forEach(([ueId, ue]) => {
        const ueGrades = grades[ueId] || {};
        let ueWeightedSum = 0;
        let ueCredits = 0;
        let ueHasGrades = false;

        // Calculate UE average
        Object.entries(ue.ecues).forEach(([ecueId, ecue]) => {
            const ecueGrades = ueGrades[ecueId] || {};
            let ecueTotal = 0;
            let ecueHasGrades = false;
            const totalCoeff = Object.values(ecue.assessments).reduce((sum, coeff) => sum + coeff, 0);

            // Calculate ECUE grade
            Object.entries(ecue.assessments).forEach(([type, coefficient]) => {
                const grade = ecueGrades[type];
                if (grade !== undefined && grade !== '') {
                    ecueTotal += parseFloat(grade) * coefficient;
                    ecueHasGrades = true;
                }
            });

            if (ecueHasGrades) {
                const ecueAverage = ecueTotal / totalCoeff;
                ueWeightedSum += ecueAverage * ecue.credits;
                ueCredits += ecue.credits;
                ueHasGrades = true;
            }
        });

        if (ueHasGrades && ueCredits > 0) {
            const ueAverage = ueWeightedSum / ueCredits;
            totalWeightedGrade += ueAverage * ue.credits;
            totalCredits += ue.credits;
            hasGrades = true;
        }
    });

    return hasGrades && totalCredits > 0 ? totalWeightedGrade / totalCredits : null;
};

export const calculateProgramAverage = (semesterAverages) => {
    const validAverages = semesterAverages.filter(avg => avg > 0);
    return validAverages.length === 0 ? 0 :
        validAverages.reduce((sum, avg) => sum + avg, 0) / validAverages.length;
};
