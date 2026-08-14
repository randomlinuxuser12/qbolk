const admissionData = [
    {
        "university": "جامعة بغداد",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 709.84,
        "minimum": 101.41,
        "preference": 295,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية طب الكندي",
        "department": "كلية طب الكندي",
        "total": 705.36,
        "minimum": 100.77,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 705.0,
        "minimum": 100.71,
        "preference": 299,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 704.6,
        "minimum": 100.66,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 704.0,
        "minimum": 100.57,
        "preference": 299,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 704.0,
        "minimum": 100.57,
        "preference": 300,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية طب الموصل",
        "department": "كلية طب الموصل",
        "total": 703.96,
        "minimum": 100.57,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 703.0,
        "minimum": 100.43,
        "preference": 299,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 702.0,
        "minimum": 100.29,
        "preference": 296,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 700.92,
        "minimum": 100.13,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ابن سينا للعلوم الطبية والصيدلانية",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 700.72,
        "minimum": 100.1,
        "preference": 296,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 700.28,
        "minimum": 100.04,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة جابر بن حيان للعلوم الطبية والصيدلانية",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 700.0,
        "minimum": 100.0,
        "preference": 295,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية طب حمورابي",
        "department": "كلية طب حمورابي",
        "total": 700.0,
        "minimum": 100.0,
        "preference": 294,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 699.0,
        "minimum": 99.86,
        "preference": 294,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية الطب",
        "department": "كلية الطب/ابناء المحافظة",
        "total": 699.0,
        "minimum": 99.86,
        "preference": 298,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفلوجة",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 699.0,
        "minimum": 99.86,
        "preference": 294,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 699.0,
        "minimum": 99.86,
        "preference": 297,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 699.0,
        "minimum": 99.86,
        "preference": 300,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 699.0,
        "minimum": 99.86,
        "preference": 300,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 698.84,
        "minimum": 99.83,
        "preference": 290,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 698.0,
        "minimum": 99.71,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 698.0,
        "minimum": 99.71,
        "preference": 290,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية طب الزهراء",
        "department": "كلية طب الزهراء",
        "total": 698.0,
        "minimum": 99.71,
        "preference": 296,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 697.96,
        "minimum": 99.71,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 697.8,
        "minimum": 99.69,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية طب البتول",
        "department": "كلية طب البتول",
        "total": 697.0,
        "minimum": 99.57,
        "preference": 294,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الطب",
        "department": "كلية الطب",
        "total": 697.0,
        "minimum": 99.57,
        "preference": 298,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الطب",
        "department": "كلية الطب/ابناء المحافظة",
        "total": 695.0,
        "minimum": 99.29,
        "preference": 300,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الطب",
        "department": "كلية الطب/ابناء المحافظة",
        "total": 689.0,
        "minimum": 98.43,
        "preference": 294,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 696.0,
        "minimum": 99.43,
        "preference": 297,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 695.0,
        "minimum": 99.29,
        "preference": 294,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 695.0,
        "minimum": 99.29,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 694.96,
        "minimum": 99.28,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 694.0,
        "minimum": 99.14,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 693.0,
        "minimum": 99.0,
        "preference": 297,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 693.0,
        "minimum": 99.0,
        "preference": 290,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 693.0,
        "minimum": 99.0,
        "preference": 289,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 693.0,
        "minimum": 99.0,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 693.0,
        "minimum": 99.0,
        "preference": 294,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 692.88,
        "minimum": 98.98,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 692.72,
        "minimum": 98.96,
        "preference": 289,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ابن سينا للعلوم الطبية والصيدلانية",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 692.0,
        "minimum": 98.86,
        "preference": 300,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 692.0,
        "minimum": 98.86,
        "preference": 297,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 691.0,
        "minimum": 98.71,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 691.0,
        "minimum": 98.71,
        "preference": 298,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 691.0,
        "minimum": 98.71,
        "preference": 300,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان",
        "total": 690.68,
        "minimum": 98.67,
        "preference": 296,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية طب الاسنان",
        "department": "كلية طب الاسنان/ابناء المحافظة",
        "total": 685.0,
        "minimum": 97.86,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 694.0,
        "minimum": 99.14,
        "preference": 294,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 691.04,
        "minimum": 98.72,
        "preference": 290,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 691.0,
        "minimum": 98.71,
        "preference": 290,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 690.44,
        "minimum": 98.63,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 690.0,
        "minimum": 98.57,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة جابر بن حيان للعلوم الطبية والصيدلانية",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 690.0,
        "minimum": 98.57,
        "preference": 298,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 689.72,
        "minimum": 98.53,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 689.6,
        "minimum": 98.51,
        "preference": 290,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 689.56,
        "minimum": 98.51,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 689.36,
        "minimum": 98.48,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 689.0,
        "minimum": 98.43,
        "preference": 296,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 689.0,
        "minimum": 98.43,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 689.0,
        "minimum": 98.43,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 689.0,
        "minimum": 98.43,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 688.0,
        "minimum": 98.29,
        "preference": 289,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 688.0,
        "minimum": 98.29,
        "preference": 295,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة",
        "total": 688.0,
        "minimum": 98.29,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الصيدلة",
        "department": "كلية الصيدلة/ابناء المحافظة",
        "total": 680.0,
        "minimum": 97.14,
        "preference": 287,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 689.0,
        "minimum": 98.43,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة للنفط والغاز",
        "college": "كلية هندسة النفط والغاز-قسم هندسة النفط والغاز",
        "department": "كلية هندسة النفط والغاز-قسم هندسة النفط والغاز",
        "total": 687.0,
        "minimum": 98.14,
        "preference": 290,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 686.2,
        "minimum": 98.03,
        "preference": 288,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الهندسة-قسم النفط والغاز",
        "department": "كلية الهندسة-قسم النفط والغاز",
        "total": 685.4,
        "minimum": 97.91,
        "preference": 284,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 685.32,
        "minimum": 97.9,
        "preference": 280,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الهندسة-قسم النفط",
        "department": "كلية الهندسة-قسم النفط",
        "total": 684.0,
        "minimum": 97.71,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة العمارة-قسم التصميم المعماري",
        "department": "كلية هندسة العمارة-قسم التصميم المعماري",
        "total": 684.0,
        "minimum": 97.71,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 683.28,
        "minimum": 97.61,
        "preference": 287,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-الخوارزمي-قسم الطب الحياتي",
        "department": "كلية الهندسة-الخوارزمي-قسم الطب الحياتي",
        "total": 683.0,
        "minimum": 97.57,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم النفط",
        "department": "كلية الهندسة-قسم النفط",
        "total": 683.0,
        "minimum": 97.57,
        "preference": 280,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 682.28,
        "minimum": 97.47,
        "preference": 279,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 682.28,
        "minimum": 97.47,
        "preference": 283,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 682.0,
        "minimum": 97.43,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم الطب الحياتي",
        "department": "كلية الهندسة-قسم الطب الحياتي",
        "total": 682.0,
        "minimum": 97.43,
        "preference": 288,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الهندسة-قسم الطب الحياتي",
        "department": "كلية الهندسة-قسم الطب الحياتي",
        "total": 681.96,
        "minimum": 97.42,
        "preference": 284,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة العمارة-قسم التصميم الحضري",
        "department": "كلية هندسة العمارة-قسم التصميم الحضري",
        "total": 681.0,
        "minimum": 97.29,
        "preference": 287,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 681.0,
        "minimum": 97.29,
        "preference": 285,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة للنفط والغاز",
        "college": "كلية هندسة النفط والغاز-قسم الهندسة الكيميائية وتكرير النفط",
        "department": "كلية هندسة النفط والغاز-قسم الهندسة الكيميائية وتكرير النفط",
        "total": 680.0,
        "minimum": 97.14,
        "preference": 286,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الهندسة-قسم النفط",
        "department": "كلية الهندسة-قسم النفط",
        "total": 678.0,
        "minimum": 96.86,
        "preference": 284,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 677.0,
        "minimum": 96.71,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم الطيران",
        "department": "كلية الهندسة-قسم الطيران",
        "total": 677.0,
        "minimum": 96.71,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الطب الحياتي-قسم الاجهزة الطبية الحيوية",
        "department": "كلية هندسة الطب الحياتي-قسم الاجهزة الطبية الحيوية",
        "total": 676.0,
        "minimum": 96.57,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة النفط والغاز-قسم النفط",
        "department": "كلية هندسة النفط والغاز-قسم النفط",
        "total": 676.0,
        "minimum": 96.57,
        "preference": 289,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية هندسة المعلومات-قسم الامن السيبراني",
        "department": "كلية هندسة المعلومات-قسم الامن السيبراني",
        "total": 675.24,
        "minimum": 96.46,
        "preference": 279,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 675.0,
        "minimum": 96.43,
        "preference": 282,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الهندسة-قسم النفط والغاز",
        "department": "كلية الهندسة-قسم النفط والغاز",
        "total": 675.0,
        "minimum": 96.43,
        "preference": 283,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة للنفط والغاز",
        "college": "كلية هندسة النفط والغاز-قسم هندسة عمليات الغاز والبتروكيمياويات",
        "department": "كلية هندسة النفط والغاز-قسم هندسة عمليات الغاز والبتروكيمياويات",
        "total": 674.0,
        "minimum": 96.29,
        "preference": 286,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 674.0,
        "minimum": 96.29,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 673.0,
        "minimum": 96.14,
        "preference": 281,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سامراء",
        "college": "كلية الهندسة-قسم العمارة",
        "department": "كلية الهندسة-قسم العمارة",
        "total": 672.76,
        "minimum": 96.11,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم الذكاء الاصطناعي والانسان الآلي",
        "department": "كلية الهندسة-قسم الذكاء الاصطناعي والانسان الآلي",
        "total": 672.0,
        "minimum": 96.0,
        "preference": 279,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الهندسة-قسم الطب الحياتي",
        "department": "كلية الهندسة-قسم الطب الحياتي",
        "total": 671.0,
        "minimum": 95.86,
        "preference": 277,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 671.0,
        "minimum": 95.86,
        "preference": 294,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الهندسة-قسم النفط",
        "department": "كلية الهندسة-قسم النفط",
        "total": 670.0,
        "minimum": 95.71,
        "preference": 281,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم الليزر",
        "department": "كلية الهندسة-قسم الليزر",
        "total": 670.0,
        "minimum": 95.71,
        "preference": 292,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم الحاسوب",
        "department": "كلية الهندسة-قسم الحاسوب",
        "total": 668.0,
        "minimum": 95.43,
        "preference": 287,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الهندسة-قسم الطب الحياتي",
        "department": "كلية الهندسة-قسم الطب الحياتي",
        "total": 668.0,
        "minimum": 95.43,
        "preference": 271,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم الاطراف والمساند الصناعية",
        "department": "كلية الهندسة-قسم الاطراف والمساند الصناعية",
        "total": 667.0,
        "minimum": 95.29,
        "preference": 274,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الهندسة-قسم الكيمياوية",
        "department": "كلية الهندسة-قسم الكيمياوية",
        "total": 667.0,
        "minimum": 95.29,
        "preference": 283,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 667.0,
        "minimum": 95.29,
        "preference": 275,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية هندسة المعلومات-قسم الاتمتة والذكاء الاصطناعي",
        "department": "كلية هندسة المعلومات-قسم الاتمتة والذكاء الاصطناعي",
        "total": 665.0,
        "minimum": 95.0,
        "preference": 285,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الهندسة-قسم الاطراف والمساند الصناعية",
        "department": "كلية الهندسة-قسم الاطراف والمساند الصناعية",
        "total": 664.68,
        "minimum": 94.95,
        "preference": 269,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 664.0,
        "minimum": 94.86,
        "preference": 284,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة الكيميائية-قسم هندسة تكرير النفط وتكنولوجيا الغاز",
        "department": "كلية الهندسة الكيميائية-قسم هندسة تكرير النفط وتكنولوجيا الغاز",
        "total": 663.0,
        "minimum": 94.71,
        "preference": 283,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 662.0,
        "minimum": 94.57,
        "preference": 280,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة النفط والغاز-قسم الغاز الطبيعي",
        "department": "كلية هندسة النفط والغاز-قسم الغاز الطبيعي",
        "total": 662.0,
        "minimum": 94.57,
        "preference": 289,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الطب الحياتي-قسم الميكانيك الحيوي",
        "department": "كلية هندسة الطب الحياتي-قسم الميكانيك الحيوي",
        "total": 661.28,
        "minimum": 94.47,
        "preference": 276,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية هندسة الالكترونيات-قسم الطب الحياتي",
        "department": "كلية هندسة الالكترونيات-قسم الطب الحياتي",
        "total": 661.0,
        "minimum": 94.43,
        "preference": 281,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الهندسة-قسم الشبكات والامن السيبراني",
        "department": "كلية الهندسة-قسم الشبكات والامن السيبراني",
        "total": 661.0,
        "minimum": 94.43,
        "preference": 270,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الهندسة-قسم الكيمياوية",
        "department": "كلية الهندسة-قسم الكيمياوية",
        "total": 661.0,
        "minimum": 94.43,
        "preference": 271,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم الحاسوب",
        "department": "كلية الهندسة-قسم الحاسوب",
        "total": 661.0,
        "minimum": 94.43,
        "preference": 277,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 661.0,
        "minimum": 94.43,
        "preference": 284,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الحاسوب-قسم الشبكات والامن السيبراني",
        "department": "كلية هندسة الحاسوب-قسم الشبكات والامن السيبراني",
        "total": 660.0,
        "minimum": 94.29,
        "preference": 280,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 660.0,
        "minimum": 94.29,
        "preference": 274,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة المدنية-قسم الانشائية",
        "department": "كلية الهندسة المدنية-قسم الانشائية",
        "total": 659.0,
        "minimum": 94.14,
        "preference": 288,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الليزر والالكترونيات البصرية-قسم الليزر",
        "department": "كلية هندسة الليزر والالكترونيات البصرية-قسم الليزر",
        "total": 659.0,
        "minimum": 94.14,
        "preference": 273,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة المدنية-قسم البناء وادارة المشاريع الانشائية",
        "department": "كلية الهندسة المدنية-قسم البناء وادارة المشاريع الانشائية",
        "total": 659.0,
        "minimum": 94.14,
        "preference": 276,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الهندسة-قسم الحاسوب",
        "department": "كلية الهندسة-قسم الحاسوب",
        "total": 658.0,
        "minimum": 94.0,
        "preference": 280,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الذكاء الاصطناعي-قسم انظمة الحوسبة الذكية والامن السيبراني",
        "department": "كلية هندسة الذكاء الاصطناعي-قسم انظمة الحوسبة الذكية والامن السيبراني",
        "total": 658.0,
        "minimum": 94.0,
        "preference": 273,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 657.0,
        "minimum": 93.86,
        "preference": 276,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 656.0,
        "minimum": 93.71,
        "preference": 287,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 656.0,
        "minimum": 93.71,
        "preference": 275,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الهندسة-قسم الميكاترونكس",
        "department": "كلية الهندسة-قسم الميكاترونكس",
        "total": 656.0,
        "minimum": 93.71,
        "preference": 276,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية هندسة العمليات النفطية-قسم هندسة تكرير النفط والغاز",
        "department": "كلية هندسة العمليات النفطية-قسم هندسة تكرير النفط والغاز",
        "total": 656.0,
        "minimum": 93.71,
        "preference": 261,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 655.76,
        "minimum": 93.68,
        "preference": 290,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم الكهرباء",
        "department": "كلية الهندسة-قسم الكهرباء",
        "total": 655.0,
        "minimum": 93.57,
        "preference": 274,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 655.0,
        "minimum": 93.57,
        "preference": 285,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 654.0,
        "minimum": 93.43,
        "preference": 265,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الهندسة-قسم الكهرباء",
        "department": "كلية الهندسة-قسم الكهرباء",
        "total": 654.0,
        "minimum": 93.43,
        "preference": 274,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم الالكترونيك والاتصالات",
        "department": "كلية الهندسة-قسم الالكترونيك والاتصالات",
        "total": 653.0,
        "minimum": 93.29,
        "preference": 283,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 653.0,
        "minimum": 93.29,
        "preference": 280,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 652.72,
        "minimum": 93.25,
        "preference": 267,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية هندسة النفط والتعدين-قسم النفط والتكرير",
        "department": "كلية هندسة النفط والتعدين-قسم النفط والتكرير",
        "total": 652.0,
        "minimum": 93.14,
        "preference": 273,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الهندسة-قسم الكهرباء والالكترونيك",
        "department": "كلية الهندسة-قسم الكهرباء والالكترونيك",
        "total": 651.0,
        "minimum": 93.0,
        "preference": 271,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الهندسة-قسم الحاسوب",
        "department": "كلية الهندسة-قسم الحاسوب",
        "total": 650.28,
        "minimum": 92.9,
        "preference": 271,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الهندسة-قسم الطب الحياتي",
        "department": "كلية الهندسة-قسم الطب الحياتي",
        "total": 650.0,
        "minimum": 92.86,
        "preference": 275,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الهندسة-قسم الذكاء الاصطناعي والانسان الالي",
        "department": "كلية الهندسة-قسم الذكاء الاصطناعي والانسان الالي",
        "total": 650.0,
        "minimum": 92.86,
        "preference": 269,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الليزر والالكترونيات البصرية-قسم الالكترونيات البصرية",
        "department": "كلية هندسة الليزر والالكترونيات البصرية-قسم الالكترونيات البصرية",
        "total": 649.0,
        "minimum": 92.71,
        "preference": 268,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم الكيمياوية",
        "department": "كلية الهندسة-قسم الكيمياوية",
        "total": 647.0,
        "minimum": 92.43,
        "preference": 286,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الحاسوب-قسم الحاسوب",
        "department": "كلية هندسة الحاسوب-قسم الحاسوب",
        "total": 646.52,
        "minimum": 92.36,
        "preference": 276,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الهندسة-قسم الكهرباء",
        "department": "كلية الهندسة-قسم الكهرباء",
        "total": 646.0,
        "minimum": 92.29,
        "preference": 274,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة المدنية-قسم الطرق والجيوتكنك",
        "department": "كلية الهندسة المدنية-قسم الطرق والجيوتكنك",
        "total": 646.0,
        "minimum": 92.29,
        "preference": 270,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الذكاء الاصطناعي-قسم الانسان الالي الذكي",
        "department": "كلية هندسة الذكاء الاصطناعي-قسم الانسان الالي الذكي",
        "total": 645.36,
        "minimum": 92.19,
        "preference": 286,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الهندسة-قسم المواد",
        "department": "كلية الهندسة-قسم المواد",
        "total": 645.0,
        "minimum": 92.14,
        "preference": 273,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-الخوارزمي-قسم المعلومات والاتصالات",
        "department": "كلية الهندسة-الخوارزمي-قسم المعلومات والاتصالات",
        "total": 644.2,
        "minimum": 92.03,
        "preference": 276,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الذكاء الاصطناعي-قسم السيطرة الذكية",
        "department": "كلية هندسة الذكاء الاصطناعي-قسم السيطرة الذكية",
        "total": 644.12,
        "minimum": 92.02,
        "preference": 260,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية هندسة المعلومات-قسم المعلومات والاتصالات",
        "department": "كلية هندسة المعلومات-قسم المعلومات والاتصالات",
        "total": 644.0,
        "minimum": 92.0,
        "preference": 265,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 644.0,
        "minimum": 92.0,
        "preference": 269,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-الخوارزمي-قسم الميكاترونكس",
        "department": "كلية الهندسة-الخوارزمي-قسم الميكاترونكس",
        "total": 642.0,
        "minimum": 91.71,
        "preference": 282,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية هندسة المعلومات-قسم شبكات الحاسوب",
        "department": "كلية هندسة المعلومات-قسم شبكات الحاسوب",
        "total": 642.0,
        "minimum": 91.71,
        "preference": 278,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الهندسة-قسم الحاسوب",
        "department": "كلية الهندسة-قسم الحاسوب",
        "total": 640.0,
        "minimum": 91.43,
        "preference": 257,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم الكيمياوي",
        "department": "كلية الهندسة-قسم الكيمياوي",
        "total": 640.0,
        "minimum": 91.43,
        "preference": 254,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 639.0,
        "minimum": 91.29,
        "preference": 267,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الهندسة-قسم الحاسوب",
        "department": "كلية الهندسة-قسم الحاسوب",
        "total": 639.0,
        "minimum": 91.29,
        "preference": 265,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم الطاقة",
        "department": "كلية الهندسة-قسم الطاقة",
        "total": 638.0,
        "minimum": 91.14,
        "preference": 265,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الهندسة-قسم الميكانيكية",
        "department": "كلية الهندسة-قسم الميكانيكية",
        "total": 637.0,
        "minimum": 91.0,
        "preference": 266,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 637.0,
        "minimum": 91.0,
        "preference": 268,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم الالكترونية والاتصالات",
        "department": "كلية الهندسة-قسم الالكترونية والاتصالات",
        "total": 636.0,
        "minimum": 90.86,
        "preference": 266,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سامراء",
        "college": "كلية الهندسة-قسم المدنية",
        "department": "كلية الهندسة-قسم المدنية",
        "total": 636.0,
        "minimum": 90.86,
        "preference": 257,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 636.0,
        "minimum": 90.86,
        "preference": 257,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية هندسة الذكاء الاصطناعي والامن السيبراني-قسم الامن السيبراني",
        "department": "كلية هندسة الذكاء الاصطناعي والامن السيبراني-قسم الامن السيبراني",
        "total": 635.0,
        "minimum": 90.71,
        "preference": 271,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكرخ للعلوم",
        "college": "كلية الهندسة-قسم المدني",
        "department": "كلية الهندسة-قسم المدني",
        "total": 634.84,
        "minimum": 90.69,
        "preference": 254,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القاسم الخضراء",
        "college": "كلية الهندسة-قسم المدنية",
        "department": "كلية الهندسة-قسم المدنية",
        "total": 634.0,
        "minimum": 90.57,
        "preference": 274,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الذكاء الاصطناعي-قسم الانظمة الادراكية",
        "department": "كلية هندسة الذكاء الاصطناعي-قسم الانظمة الادراكية",
        "total": 634.0,
        "minimum": 90.57,
        "preference": 273,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة الكهربائية-قسم الكهرباء",
        "department": "كلية الهندسة الكهربائية-قسم الكهرباء",
        "total": 634.0,
        "minimum": 90.57,
        "preference": 262,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الهندسة-قسم الكهرباء",
        "department": "كلية الهندسة-قسم الكهرباء",
        "total": 633.0,
        "minimum": 90.43,
        "preference": 255,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية هندسة الذكاء الاصطناعي والامن السيبراني-قسم الذكاء الاصطناعي",
        "department": "كلية هندسة الذكاء الاصطناعي والامن السيبراني-قسم الذكاء الاصطناعي",
        "total": 633.0,
        "minimum": 90.43,
        "preference": 262,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة الكيميائية-قسم الهندسة الكيمياوية والتلوث النفطي",
        "department": "كلية الهندسة الكيميائية-قسم الهندسة الكيمياوية والتلوث النفطي",
        "total": 633.0,
        "minimum": 90.43,
        "preference": 250,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية هندسة تكنولوجيا الذكاء الاصطناعي-قسم هندسة الذكاء الاصطناعي",
        "department": "كلية هندسة تكنولوجيا الذكاء الاصطناعي-قسم هندسة الذكاء الاصطناعي",
        "total": 632.0,
        "minimum": 90.29,
        "preference": 272,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة الميكانيكية-قسم الطائرات",
        "department": "كلية الهندسة الميكانيكية-قسم الطائرات",
        "total": 632.0,
        "minimum": 90.29,
        "preference": 269,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية هندسة العمليات النفطية-قسم سيطرة المنظومات النفطية",
        "department": "كلية هندسة العمليات النفطية-قسم سيطرة المنظومات النفطية",
        "total": 632.0,
        "minimum": 90.29,
        "preference": 247,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية هندسة النفط والتعدين-قسم المكامن النفطية",
        "department": "كلية هندسة النفط والتعدين-قسم المكامن النفطية",
        "total": 630.0,
        "minimum": 90.0,
        "preference": 259,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم المساحة",
        "department": "كلية الهندسة-قسم المساحة",
        "total": 630.0,
        "minimum": 90.0,
        "preference": 268,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 629.0,
        "minimum": 89.86,
        "preference": 273,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكرخ للعلوم",
        "college": "كلية الهندسة-قسم الامن السيبراني",
        "department": "كلية الهندسة-قسم الامن السيبراني",
        "total": 629.0,
        "minimum": 89.86,
        "preference": 262,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم الطائرات المسيرة",
        "department": "كلية الهندسة-قسم الطائرات المسيرة",
        "total": 628.67,
        "minimum": 89.81,
        "preference": 270,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الهندسة-قسم الالكترون والاتصالات",
        "department": "كلية الهندسة-قسم الالكترون والاتصالات",
        "total": 628.32,
        "minimum": 89.76,
        "preference": 287,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الشطرة",
        "college": "كلية الهندسة-قسم المدنية",
        "department": "كلية الهندسة-قسم المدنية",
        "total": 628.0,
        "minimum": 89.71,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الهندسة-قسم الكهرباء",
        "department": "كلية الهندسة-قسم الكهرباء",
        "total": 628.0,
        "minimum": 89.71,
        "preference": 261,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الهندسة-قسم الكهرباء",
        "department": "كلية الهندسة-قسم الكهرباء",
        "total": 627.0,
        "minimum": 89.57,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية هندسة تكنولوجيا الذكاء الاصطناعي-قسم هندسة الامن السيبراني",
        "department": "كلية هندسة تكنولوجيا الذكاء الاصطناعي-قسم هندسة الامن السيبراني",
        "total": 627.0,
        "minimum": 89.57,
        "preference": 254,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة الكيميائية-قسم هندسة العمليات الكيمياوية",
        "department": "كلية الهندسة الكيميائية-قسم هندسة العمليات الكيمياوية",
        "total": 626.88,
        "minimum": 89.55,
        "preference": 256,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية الهندسة-قسم الكيميائية والبتروكيميائية",
        "department": "كلية الهندسة-قسم الكيميائية والبتروكيميائية",
        "total": 626.0,
        "minimum": 89.43,
        "preference": 263,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الهندسة-قسم الكهرباء",
        "department": "كلية الهندسة-قسم الكهرباء",
        "total": 625.32,
        "minimum": 89.33,
        "preference": 257,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية هندسة النفط والتعدين-قسم التعدين",
        "department": "كلية هندسة النفط والتعدين-قسم التعدين",
        "total": 624.0,
        "minimum": 89.14,
        "preference": 238,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكرخ للعلوم",
        "college": "كلية الهندسة-قسم الذكاء الاصطناعي والانسان الالي",
        "department": "كلية الهندسة-قسم الذكاء الاصطناعي والانسان الالي",
        "total": 623.0,
        "minimum": 89.0,
        "preference": 262,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الهندسة-قسم الكيمياوية",
        "department": "كلية الهندسة-قسم الكيمياوية",
        "total": 623.0,
        "minimum": 89.0,
        "preference": 240,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة المدنية-قسم المنشآت الهيدروليكية والموارد المائية",
        "department": "كلية الهندسة المدنية-قسم المنشآت الهيدروليكية والموارد المائية",
        "total": 622.0,
        "minimum": 88.86,
        "preference": 269,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الهندسة-قسم الكهربائية",
        "department": "كلية الهندسة-قسم الكهربائية",
        "total": 622.0,
        "minimum": 88.86,
        "preference": 259,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة المدنية-قسم الجيوماتيك",
        "department": "كلية الهندسة المدنية-قسم الجيوماتيك",
        "total": 622.0,
        "minimum": 88.86,
        "preference": 255,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الهندسة-قسم الكهربائية والالكترونية",
        "department": "كلية الهندسة-قسم الكهربائية والالكترونية",
        "total": 620.0,
        "minimum": 88.57,
        "preference": 269,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 620.0,
        "minimum": 88.57,
        "preference": 259,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الاتصالات-قسم نظم الاتصالات اللاسلكية",
        "department": "كلية هندسة الاتصالات-قسم نظم الاتصالات اللاسلكية",
        "total": 618.0,
        "minimum": 88.29,
        "preference": 272,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الكهروميكانيك-قسم هندسة نظم الطائرات بدون طيار",
        "department": "كلية هندسة الكهروميكانيك-قسم هندسة نظم الطائرات بدون طيار",
        "total": 618.0,
        "minimum": 88.29,
        "preference": 261,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الكهروميكانيك-قسم معدات النفط والغاز",
        "department": "كلية هندسة الكهروميكانيك-قسم معدات النفط والغاز",
        "total": 617.0,
        "minimum": 88.14,
        "preference": 246,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة الكهربائية-قسم الالكترونيك",
        "department": "كلية الهندسة الكهربائية-قسم الالكترونيك",
        "total": 617.0,
        "minimum": 88.14,
        "preference": 252,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية الهندسة-قسم الكهربائية",
        "department": "كلية الهندسة-قسم الكهربائية",
        "total": 617.0,
        "minimum": 88.14,
        "preference": 237,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الهندسة-قسم الكيمياوية",
        "department": "كلية الهندسة-قسم الكيمياوية",
        "total": 616.0,
        "minimum": 88.0,
        "preference": 253,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 614.04,
        "minimum": 87.72,
        "preference": 247,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكنولوجيا المعلومات والاتصالات",
        "college": "كلية الهندسة-قسم هندسة الاتصالات والحوسبة المتنقلة",
        "department": "كلية الهندسة-قسم هندسة الاتصالات والحوسبة المتنقلة",
        "total": 614.0,
        "minimum": 87.71,
        "preference": 252,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الاتصالات-قسم نظم الاتصالات الضوئية",
        "department": "كلية هندسة الاتصالات-قسم نظم الاتصالات الضوئية",
        "total": 612.56,
        "minimum": 87.51,
        "preference": 269,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الشطرة",
        "college": "كلية الهندسة-قسم الطب الحياتي",
        "department": "كلية الهندسة-قسم الطب الحياتي",
        "total": 612.0,
        "minimum": 87.43,
        "preference": 259,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الهندسة-قسم الميكاترونكس",
        "department": "كلية الهندسة-قسم الميكاترونكس",
        "total": 611.0,
        "minimum": 87.29,
        "preference": 258,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-الخوارزمي-قسم التصنيع المؤتمت",
        "department": "كلية الهندسة-الخوارزمي-قسم التصنيع المؤتمت",
        "total": 611.0,
        "minimum": 87.29,
        "preference": 272,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة الميكانيكية-قسم الميكانيك العام",
        "department": "كلية الهندسة الميكانيكية-قسم الميكانيك العام",
        "total": 607.0,
        "minimum": 86.71,
        "preference": 258,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة المدنية-قسم الهندسة البيئية",
        "department": "كلية الهندسة المدنية-قسم الهندسة البيئية",
        "total": 607.0,
        "minimum": 86.71,
        "preference": 284,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكنولوجيا المعلومات والاتصالات",
        "college": "كلية الهندسة-قسم هندسة تكنولوجيا الاعلام والاتصالات",
        "department": "كلية الهندسة-قسم هندسة تكنولوجيا الاعلام والاتصالات",
        "total": 604.0,
        "minimum": 86.29,
        "preference": 258,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 604.0,
        "minimum": 86.29,
        "preference": 237,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الهندسة-قسم الطرق",
        "department": "كلية الهندسة-قسم الطرق",
        "total": 602.0,
        "minimum": 86.0,
        "preference": 263,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الهندسة-قسم الحاسوب",
        "department": "كلية الهندسة-قسم الحاسوب",
        "total": 602.0,
        "minimum": 86.0,
        "preference": 270,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الهندسة-قسم الكهرباء",
        "department": "كلية الهندسة-قسم الكهرباء",
        "total": 601.0,
        "minimum": 85.86,
        "preference": 266,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الهندسة-قسم الطاقة والطاقات المتجددة",
        "department": "كلية الهندسة-قسم الطاقة والطاقات المتجددة",
        "total": 601.0,
        "minimum": 85.86,
        "preference": 258,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 600.0,
        "minimum": 85.71,
        "preference": 252,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الهندسة-قسم الالكترونيك والاتصالات",
        "department": "كلية الهندسة-قسم الالكترونيك والاتصالات",
        "total": 600.0,
        "minimum": 85.71,
        "preference": 232,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 600.0,
        "minimum": 85.71,
        "preference": 252,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الاتصالات-قسم الرادار والاقمار الصناعية",
        "department": "كلية هندسة الاتصالات-قسم الرادار والاقمار الصناعية",
        "total": 599.2,
        "minimum": 85.6,
        "preference": 236,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الهندسة-قسم الكيمياوي",
        "department": "كلية الهندسة-قسم الكيمياوي",
        "total": 599.0,
        "minimum": 85.57,
        "preference": 257,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الهندسة-قسم الكهرباء",
        "department": "كلية الهندسة-قسم الكهرباء",
        "total": 599.0,
        "minimum": 85.57,
        "preference": 238,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم الموارد المائية",
        "department": "كلية الهندسة-قسم الموارد المائية",
        "total": 598.0,
        "minimum": 85.43,
        "preference": 260,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الهندسة-قسم البيئة",
        "department": "كلية الهندسة-قسم البيئة",
        "total": 597.0,
        "minimum": 85.29,
        "preference": 251,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الهندسة-قسم الكيمياوية",
        "department": "كلية الهندسة-قسم الكيمياوية",
        "total": 596.0,
        "minimum": 85.14,
        "preference": 238,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية الهندسة-قسم الكيمياوي",
        "department": "كلية الهندسة-قسم الكيمياوي",
        "total": 596.0,
        "minimum": 85.14,
        "preference": 243,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الهندسة-قسم الكيمياوي",
        "department": "كلية الهندسة-قسم الكيمياوي",
        "total": 595.0,
        "minimum": 85.0,
        "preference": 236,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الكهروميكانيك-قسم الطاقة والطاقات المتجددة",
        "department": "كلية هندسة الكهروميكانيك-قسم الطاقة والطاقات المتجددة",
        "total": 594.0,
        "minimum": 84.86,
        "preference": 234,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الهندسة-قسم المساحة والجيوماتيك",
        "department": "كلية الهندسة-قسم المساحة والجيوماتيك",
        "total": 594.0,
        "minimum": 84.86,
        "preference": 261,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الهندسة-قسم الكيمياوي",
        "department": "كلية الهندسة-قسم الكيمياوي",
        "total": 593.0,
        "minimum": 84.71,
        "preference": 244,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الهندسة-قسم هندسة الاتصالات والانظمة الرقمية الذكية",
        "department": "كلية الهندسة-قسم هندسة الاتصالات والانظمة الرقمية الذكية",
        "total": 593.0,
        "minimum": 84.71,
        "preference": 251,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 589.0,
        "minimum": 84.14,
        "preference": 237,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية الهندسة-قسم الاتصالات والالكترونيك",
        "department": "كلية الهندسة-قسم الاتصالات والالكترونيك",
        "total": 588.0,
        "minimum": 84.0,
        "preference": 247,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 587.0,
        "minimum": 83.86,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الكهروميكانيك-قسم الهندسة الكهروميكانيكية",
        "department": "كلية هندسة الكهروميكانيك-قسم الهندسة الكهروميكانيكية",
        "total": 586.0,
        "minimum": 83.71,
        "preference": 236,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 585.0,
        "minimum": 83.57,
        "preference": 238,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة الميكانيكية-قسم محطات القدرة",
        "department": "كلية الهندسة الميكانيكية-قسم محطات القدرة",
        "total": 582.0,
        "minimum": 83.14,
        "preference": 220,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الهندسة-قسم المواد",
        "department": "كلية الهندسة-قسم المواد",
        "total": 582.0,
        "minimum": 83.14,
        "preference": 228,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة المواد-قسم المواد",
        "department": "كلية هندسة المواد-قسم المواد",
        "total": 579.0,
        "minimum": 82.71,
        "preference": 243,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 579.0,
        "minimum": 82.71,
        "preference": 230,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 577.0,
        "minimum": 82.43,
        "preference": 234,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة الميكانيكية-قسم التكييف والتجميد",
        "department": "كلية الهندسة الميكانيكية-قسم التكييف والتجميد",
        "total": 577.0,
        "minimum": 82.43,
        "preference": 250,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية الهندسة الميكانيكية-قسم السيارات والتنقل المستدام",
        "department": "كلية الهندسة الميكانيكية-قسم السيارات والتنقل المستدام",
        "total": 574.0,
        "minimum": 82.0,
        "preference": 240,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الهندسة-قسم الطرق والنقل",
        "department": "كلية الهندسة-قسم الطرق والنقل",
        "total": 572.0,
        "minimum": 81.71,
        "preference": 240,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الهندسة-قسم الاتصالات",
        "department": "كلية الهندسة-قسم الاتصالات",
        "total": 572.0,
        "minimum": 81.71,
        "preference": 226,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية الهندسة-قسم الاتصالات",
        "department": "كلية الهندسة-قسم الاتصالات",
        "total": 569.0,
        "minimum": 81.29,
        "preference": 235,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية هندسة الالكترونيات-قسم الاتصالات",
        "department": "كلية هندسة الالكترونيات-قسم الاتصالات",
        "total": 568.08,
        "minimum": 81.15,
        "preference": 242,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الانتاج والمعادن-قسم المعادن",
        "department": "كلية هندسة الانتاج والمعادن-قسم المعادن",
        "total": 567.0,
        "minimum": 81.0,
        "preference": 238,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الهندسة-قسم الطرق والمطارات",
        "department": "كلية الهندسة-قسم الطرق والمطارات",
        "total": 566.0,
        "minimum": 80.86,
        "preference": 239,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 566.0,
        "minimum": 80.86,
        "preference": 246,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 565.0,
        "minimum": 80.71,
        "preference": 231,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الشطرة",
        "college": "كلية الهندسة-قسم الحاسوب والذكاء الاصطناعي",
        "department": "كلية الهندسة-قسم الحاسوب والذكاء الاصطناعي",
        "total": 565.0,
        "minimum": 80.71,
        "preference": 244,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الهندسة-قسم البيئة",
        "department": "كلية الهندسة-قسم البيئة",
        "total": 564.0,
        "minimum": 80.57,
        "preference": 216,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الهندسة-قسم القدرة والمكائن الكهربائية",
        "department": "كلية الهندسة-قسم القدرة والمكائن الكهربائية",
        "total": 563.0,
        "minimum": 80.43,
        "preference": 228,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الهندسة-قسم المواد",
        "department": "كلية الهندسة-قسم المواد",
        "total": 561.12,
        "minimum": 80.16,
        "preference": 242,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الكهروميكانيك-قسم الملاحة والتوجيه",
        "department": "كلية هندسة الكهروميكانيك-قسم الملاحة والتوجيه",
        "total": 560.0,
        "minimum": 80.0,
        "preference": 241,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الهندسة-قسم البيئة",
        "department": "كلية الهندسة-قسم البيئة",
        "total": 559.0,
        "minimum": 79.86,
        "preference": 227,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 559.0,
        "minimum": 79.86,
        "preference": 221,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الهندسة-قسم الموارد المائية",
        "department": "كلية الهندسة-قسم الموارد المائية",
        "total": 557.0,
        "minimum": 79.57,
        "preference": 219,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الهندسة-قسم الكهرباء",
        "department": "كلية الهندسة-قسم الكهرباء",
        "total": 557.0,
        "minimum": 79.57,
        "preference": 230,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سامراء",
        "college": "كلية الهندسة-قسم الكهروميكانيكية",
        "department": "كلية الهندسة-قسم الكهروميكانيكية",
        "total": 556.0,
        "minimum": 79.43,
        "preference": 243,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الهندسة-قسم الالكترونيك",
        "department": "كلية الهندسة-قسم الالكترونيك",
        "total": 555.0,
        "minimum": 79.29,
        "preference": 204,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الانتاج والمعادن-قسم التصميم والتصنيع المعان بالحاسوب",
        "department": "كلية هندسة الانتاج والمعادن-قسم التصميم والتصنيع المعان بالحاسوب",
        "total": 554.0,
        "minimum": 79.14,
        "preference": 237,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "هندسة المواد-قسم المعادن",
        "department": "هندسة المواد-قسم المعادن",
        "total": 553.0,
        "minimum": 79.0,
        "preference": 221,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الهندسة-قسم المواد",
        "department": "كلية الهندسة-قسم المواد",
        "total": 552.0,
        "minimum": 78.86,
        "preference": 231,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الانتاج والمعادن-قسم التصنيع الذكي",
        "department": "كلية هندسة الانتاج والمعادن-قسم التصنيع الذكي",
        "total": 551.0,
        "minimum": 78.71,
        "preference": 227,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة المواد-قسم المواد البوليمرية والبتروكيمياوية",
        "department": "كلية هندسة المواد-قسم المواد البوليمرية والبتروكيمياوية",
        "total": 550.0,
        "minimum": 78.57,
        "preference": 193,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية هندسة الالكترونيات-قسم الحاسوب والمعلوماتية",
        "department": "كلية هندسة الالكترونيات-قسم الحاسوب والمعلوماتية",
        "total": 550.0,
        "minimum": 78.57,
        "preference": 232,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الهندسة-قسم الطاقة المستدامة",
        "department": "كلية الهندسة-قسم الطاقة المستدامة",
        "total": 549.0,
        "minimum": 78.43,
        "preference": 213,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الانتاج والمعادن-قسم التعدين واستخلاص المعادن",
        "department": "كلية هندسة الانتاج والمعادن-قسم التعدين واستخلاص المعادن",
        "total": 548.0,
        "minimum": 78.29,
        "preference": 210,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة الانتاج والمعادن-قسم الصناعية والنظم",
        "department": "كلية هندسة الانتاج والمعادن-قسم الصناعية والنظم",
        "total": 541.0,
        "minimum": 77.29,
        "preference": 201,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الهندسة-قسم المنشأت والموارد المائية",
        "department": "كلية الهندسة-قسم المنشأت والموارد المائية",
        "total": 541.0,
        "minimum": 77.29,
        "preference": 220,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "هندسة المواد-قسم البوليمرات والصناعات البتروكيمياوية",
        "department": "هندسة المواد-قسم البوليمرات والصناعات البتروكيمياوية",
        "total": 541.0,
        "minimum": 77.29,
        "preference": 208,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الهندسة-قسم المواد",
        "department": "كلية الهندسة-قسم المواد",
        "total": 540.0,
        "minimum": 77.14,
        "preference": 241,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية هندسة المواد-قسم السيراميك ومواد البناء",
        "department": "كلية هندسة المواد-قسم السيراميك ومواد البناء",
        "total": 539.0,
        "minimum": 77.0,
        "preference": 206,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية الهندسة-قسم السدود وموارد المياه",
        "department": "كلية الهندسة-قسم السدود وموارد المياه",
        "total": 538.0,
        "minimum": 76.86,
        "preference": 230,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الهندسة",
        "department": "كلية الهندسة/المسيب-قسم الطاقة والطاقات المتجددة",
        "total": 534.0,
        "minimum": 76.29,
        "preference": 203,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الهندسة-قسم البيئة",
        "department": "كلية الهندسة-قسم البيئة",
        "total": 530.0,
        "minimum": 75.71,
        "preference": 211,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الهندسة-قسم الميكانيك",
        "department": "كلية الهندسة-قسم الميكانيك",
        "total": 530.0,
        "minimum": 75.71,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الهندسة-قسم الطاقة المستدامة",
        "department": "كلية الهندسة-قسم الطاقة المستدامة",
        "total": 529.0,
        "minimum": 75.57,
        "preference": 200,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "هندسة المواد-قسم السيراميك ومواد البناء",
        "department": "هندسة المواد-قسم السيراميك ومواد البناء",
        "total": 527.0,
        "minimum": 75.29,
        "preference": 221,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الهندسة-قسم السدود والموارد المائية",
        "department": "كلية الهندسة-قسم السدود والموارد المائية",
        "total": 516.0,
        "minimum": 73.71,
        "preference": 204,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية هندسة الالكترونيات-قسم الالكترونيك",
        "department": "كلية هندسة الالكترونيات-قسم الالكترونيك",
        "total": 516.0,
        "minimum": 73.71,
        "preference": 189,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "هندسة المواد-قسم السلامة المهنية والحرائق",
        "department": "هندسة المواد-قسم السلامة المهنية والحرائق",
        "total": 513.0,
        "minimum": 73.29,
        "preference": 220,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الهندسة-قسم البيئة",
        "department": "كلية الهندسة-قسم البيئة",
        "total": 513.0,
        "minimum": 73.29,
        "preference": 226,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القاسم الخضراء",
        "college": "كلية الهندسة-قسم ادارة الموارد المائية",
        "department": "كلية الهندسة-قسم ادارة الموارد المائية",
        "total": 508.0,
        "minimum": 72.57,
        "preference": 205,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية هندسة الالكترونيات-قسم النظم والسيطرة",
        "department": "كلية هندسة الالكترونيات-قسم النظم والسيطرة",
        "total": 504.0,
        "minimum": 72.0,
        "preference": 197,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الهندسة",
        "department": "كلية الهندسة/الشرقاط-قسم الكهربائية",
        "total": 502.0,
        "minimum": 71.71,
        "preference": 231,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الشطرة",
        "college": "كلية الهندسة-قسم المواد",
        "department": "كلية الهندسة-قسم المواد",
        "total": 500.0,
        "minimum": 71.43,
        "preference": 178,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الهندسة-قسم السدود والموارد المائية",
        "department": "كلية الهندسة-قسم السدود والموارد المائية",
        "total": 497.0,
        "minimum": 71.0,
        "preference": 218,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الهندسة",
        "department": "كلية الهندسة/المسيب-قسم تكييف الهواء والتجميد",
        "total": 489.0,
        "minimum": 69.86,
        "preference": 214,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الهندسة",
        "department": "كلية الهندسة/الشرقاط-قسم الميكانيكية",
        "total": 485.0,
        "minimum": 69.29,
        "preference": 181,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الهندسة",
        "department": "كلية الهندسة/المسيب-قسم السيارات",
        "total": 474.0,
        "minimum": 67.71,
        "preference": 178,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة جابر بن حيان للعلوم الطبية والصيدلانية",
        "college": "كلية العلوم الطبية",
        "department": "كلية العلوم الطبية",
        "total": 612.0,
        "minimum": 87.43,
        "preference": 258,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 581.0,
        "minimum": 83.0,
        "preference": 249,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 568.0,
        "minimum": 81.14,
        "preference": 220,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 553.0,
        "minimum": 79.0,
        "preference": 236,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 552.0,
        "minimum": 78.86,
        "preference": 242,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية العلوم-قسم الرياضيات",
        "department": "كلية العلوم-قسم الرياضيات",
        "total": 549.0,
        "minimum": 78.43,
        "preference": 227,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية العلوم-قسم الرياضيات",
        "department": "كلية العلوم-قسم الرياضيات",
        "total": 548.0,
        "minimum": 78.29,
        "preference": 215,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 536.0,
        "minimum": 76.57,
        "preference": 201,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية العلوم-قسم الرياضيات وتطبيقات الحاسوب",
        "department": "كلية العلوم-قسم الرياضيات وتطبيقات الحاسوب",
        "total": 533.0,
        "minimum": 76.14,
        "preference": 195,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 530.0,
        "minimum": 75.71,
        "preference": 217,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 528.0,
        "minimum": 75.43,
        "preference": 192,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية العلوم-قسم الفلك والفضاء",
        "department": "كلية العلوم-قسم الفلك والفضاء",
        "total": 525.0,
        "minimum": 75.0,
        "preference": 236,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية العلوم-قسم الرياضيات",
        "department": "كلية العلوم-قسم الرياضيات",
        "total": 519.0,
        "minimum": 74.14,
        "preference": 213,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية العلوم للبنات",
        "department": "كلية العلوم للبنات",
        "total": 519.0,
        "minimum": 74.14,
        "preference": 214,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 517.0,
        "minimum": 73.86,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية العلوم للبنات-قسم الحاسوب",
        "department": "كلية العلوم للبنات-قسم الحاسوب",
        "total": 516.6,
        "minimum": 73.8,
        "preference": 210,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية العلوم للبنات-قسم الرياضيات",
        "department": "كلية العلوم للبنات-قسم الرياضيات",
        "total": 504.0,
        "minimum": 72.0,
        "preference": 194,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الكرخ للعلوم",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 504.0,
        "minimum": 72.0,
        "preference": 198,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 503.0,
        "minimum": 71.86,
        "preference": 213,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 502.0,
        "minimum": 71.71,
        "preference": 203,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية العلوم-قسم الرياضيات وتطبيقات الحاسوب",
        "department": "كلية العلوم-قسم الرياضيات وتطبيقات الحاسوب",
        "total": 498.0,
        "minimum": 71.14,
        "preference": 199,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 486.0,
        "minimum": 69.43,
        "preference": 197,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 482.0,
        "minimum": 68.86,
        "preference": 185,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 480.0,
        "minimum": 68.57,
        "preference": 195,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكنولوجيا المعلومات والاتصالات",
        "college": "كلية المعلوماتية الطبية الحيوية",
        "department": "كلية المعلوماتية الطبية الحيوية",
        "total": 475.0,
        "minimum": 67.86,
        "preference": 206,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 475.0,
        "minimum": 67.86,
        "preference": 173,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 474.0,
        "minimum": 67.71,
        "preference": 195,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 469.0,
        "minimum": 67.0,
        "preference": 189,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 467.0,
        "minimum": 66.71,
        "preference": 162,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية العلوم-قسم الرياضيات",
        "department": "كلية العلوم-قسم الرياضيات",
        "total": 463.0,
        "minimum": 66.14,
        "preference": 178,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية العلوم للبنات",
        "department": "كلية العلوم للبنات",
        "total": 462.0,
        "minimum": 66.0,
        "preference": 176,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة القاسم الخضراء",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 460.0,
        "minimum": 65.71,
        "preference": 196,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية العلوم",
        "department": "كلية العلوم",
        "total": 448.0,
        "minimum": 64.0,
        "preference": 158,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكرخ للعلوم",
        "college": "كلية علوم الطاقة والبيئة",
        "department": "كلية علوم الطاقة والبيئة",
        "total": 441.0,
        "minimum": 63.0,
        "preference": 160,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "department": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "total": 570.0,
        "minimum": 81.43,
        "preference": 211,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "department": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "total": 570.0,
        "minimum": 81.43,
        "preference": 232,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التكنولوجية",
        "college": "كلية علوم الحاسوب",
        "department": "كلية علوم الحاسوب",
        "total": 553.0,
        "minimum": 79.0,
        "preference": 209,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية تكنولوجيا المعلومات",
        "department": "كلية تكنولوجيا المعلومات",
        "total": 523.0,
        "minimum": 74.71,
        "preference": 224,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية علوم الحاسوب والرياضيات-قسم الرياضيات",
        "department": "كلية علوم الحاسوب والرياضيات-قسم الرياضيات",
        "total": 503.0,
        "minimum": 71.86,
        "preference": 184,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية علوم الحاسوب والرياضيات-قسم الحاسوب",
        "department": "كلية علوم الحاسوب والرياضيات-قسم الحاسوب",
        "total": 496.0,
        "minimum": 70.86,
        "preference": 192,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكنولوجيا المعلومات والاتصالات",
        "college": "كلية معلوماتية الاعمال",
        "department": "كلية معلوماتية الاعمال",
        "total": 491.0,
        "minimum": 70.14,
        "preference": 199,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية علوم الحاسوب والرياضيات-قسم تكنولوجيا المعلومات",
        "department": "كلية علوم الحاسوب والرياضيات-قسم تكنولوجيا المعلومات",
        "total": 489.0,
        "minimum": 69.86,
        "preference": 235,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية علوم الحاسوب والرياضيات",
        "department": "كلية علوم الحاسوب والرياضيات",
        "total": 482.0,
        "minimum": 68.86,
        "preference": 221,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "department": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "total": 470.0,
        "minimum": 67.14,
        "preference": 187,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية علوم الحاسوب والرياضيات",
        "department": "كلية علوم الحاسوب والرياضيات",
        "total": 465.0,
        "minimum": 66.43,
        "preference": 207,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية علوم الحاسوب والرياضيات-قسم الرياضيات",
        "department": "كلية علوم الحاسوب والرياضيات-قسم الرياضيات",
        "total": 461.0,
        "minimum": 65.86,
        "preference": 219,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الحمدانية",
        "college": "كلية الحاسبات والمعلوماتية",
        "department": "كلية الحاسبات والمعلوماتية",
        "total": 449.0,
        "minimum": 64.14,
        "preference": 179,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "department": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "total": 445.0,
        "minimum": 63.57,
        "preference": 168,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفلوجة",
        "college": "كلية تكنولوجيا المعلومات",
        "department": "كلية تكنولوجيا المعلومات",
        "total": 441.0,
        "minimum": 63.0,
        "preference": 180,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية تكنولوجيا المعلومات",
        "department": "كلية تكنولوجيا المعلومات",
        "total": 441.0,
        "minimum": 63.0,
        "preference": 170,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "department": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "total": 441.0,
        "minimum": 63.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "department": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "total": 441.0,
        "minimum": 63.0,
        "preference": 153,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "department": "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "total": 441.0,
        "minimum": 63.0,
        "preference": 151,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية علوم الحاسوب والرياضيات",
        "department": "كلية علوم الحاسوب والرياضيات",
        "total": 441.0,
        "minimum": 63.0,
        "preference": 160,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القاسم الخضراء",
        "college": "كلية علوم البيئة",
        "department": "كلية علوم البيئة",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية العلوم البيئية-قسم تقانات البيئة",
        "department": "كلية العلوم البيئية-قسم تقانات البيئة",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 158,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية العلوم البيئية",
        "department": "كلية العلوم البيئية",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 152,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 650.0,
        "minimum": 92.86,
        "preference": 187,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 639.0,
        "minimum": 91.29,
        "preference": 180,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 636.0,
        "minimum": 90.86,
        "preference": 166,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية الحقوق",
        "department": "كلية الحقوق",
        "total": 622.0,
        "minimum": 88.86,
        "preference": 181,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 604.0,
        "minimum": 86.29,
        "preference": 182,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية القانون والعلوم السياسية-قسم القانون",
        "department": "كلية القانون والعلوم السياسية-قسم القانون",
        "total": 597.0,
        "minimum": 85.29,
        "preference": 180,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 592.0,
        "minimum": 84.57,
        "preference": 173,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكرخ للعلوم",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 592.0,
        "minimum": 84.57,
        "preference": 183,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 588.0,
        "minimum": 84.0,
        "preference": 166,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 582.0,
        "minimum": 83.14,
        "preference": 187,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 582.0,
        "minimum": 83.14,
        "preference": 166,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الحقوق",
        "department": "كلية الحقوق",
        "total": 560.0,
        "minimum": 80.0,
        "preference": 176,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 551.0,
        "minimum": 78.71,
        "preference": 142,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 548.0,
        "minimum": 78.29,
        "preference": 156,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الحمدانية",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 542.0,
        "minimum": 77.43,
        "preference": 140,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية القانون والعلوم السياسية-قسم القانون",
        "department": "كلية القانون والعلوم السياسية-قسم القانون",
        "total": 539.0,
        "minimum": 77.0,
        "preference": 176,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 538.0,
        "minimum": 76.86,
        "preference": 171,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 537.0,
        "minimum": 76.71,
        "preference": 147,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 537.0,
        "minimum": 76.71,
        "preference": 159,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 523.0,
        "minimum": 74.71,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 512.0,
        "minimum": 73.14,
        "preference": 147,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفلوجة",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 509.0,
        "minimum": 72.71,
        "preference": 138,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية القانون والعلوم السياسية-قسم القانون",
        "department": "كلية القانون والعلوم السياسية-قسم القانون",
        "total": 499.0,
        "minimum": 71.29,
        "preference": 170,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سامراء",
        "college": "كلية القانون",
        "department": "كلية القانون",
        "total": 490.0,
        "minimum": 70.0,
        "preference": 134,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية العلوم السياسية",
        "department": "كلية العلوم السياسية",
        "total": 581.0,
        "minimum": 83.0,
        "preference": 171,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية العلوم السياسية",
        "department": "كلية العلوم السياسية",
        "total": 555.0,
        "minimum": 79.29,
        "preference": 186,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية العلوم السياسية",
        "department": "كلية العلوم السياسية",
        "total": 546.0,
        "minimum": 78.0,
        "preference": 170,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية القانون والعلوم السياسية-قسم العلوم السياسية",
        "department": "كلية القانون والعلوم السياسية-قسم العلوم السياسية",
        "total": 532.0,
        "minimum": 76.0,
        "preference": 148,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية العلوم السياسية",
        "department": "كلية العلوم السياسية",
        "total": 508.0,
        "minimum": 72.57,
        "preference": 142,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية القانون والعلوم السياسية-قسم العلوم السياسية",
        "department": "كلية القانون والعلوم السياسية-قسم العلوم السياسية",
        "total": 506.0,
        "minimum": 72.29,
        "preference": 130,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية العلوم السياسية",
        "department": "كلية العلوم السياسية",
        "total": 492.0,
        "minimum": 70.29,
        "preference": 146,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية القانون والعلوم السياسية-قسم العلوم السياسية",
        "department": "كلية القانون والعلوم السياسية-قسم العلوم السياسية",
        "total": 489.0,
        "minimum": 69.86,
        "preference": 131,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية العلوم السياسية",
        "department": "كلية العلوم السياسية",
        "total": 484.0,
        "minimum": 69.14,
        "preference": 129,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية العلوم السياسية",
        "department": "كلية العلوم السياسية",
        "total": 470.0,
        "minimum": 67.14,
        "preference": 148,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية العلوم السياسية",
        "department": "كلية العلوم السياسية",
        "total": 460.0,
        "minimum": 65.71,
        "preference": 130,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 676.0,
        "minimum": 96.57,
        "preference": 284,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 675.0,
        "minimum": 96.43,
        "preference": 286,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 675.0,
        "minimum": 96.43,
        "preference": 292,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 675.0,
        "minimum": 96.43,
        "preference": 288,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 673.0,
        "minimum": 96.14,
        "preference": 282,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 673.0,
        "minimum": 96.14,
        "preference": 293,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 672.0,
        "minimum": 96.0,
        "preference": 281,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 672.0,
        "minimum": 96.0,
        "preference": 286,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 672.0,
        "minimum": 96.0,
        "preference": 284,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 671.0,
        "minimum": 95.86,
        "preference": 286,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 670.0,
        "minimum": 95.71,
        "preference": 286,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 670.0,
        "minimum": 95.71,
        "preference": 288,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 670.0,
        "minimum": 95.71,
        "preference": 281,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 667.0,
        "minimum": 95.29,
        "preference": 278,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 667.0,
        "minimum": 95.29,
        "preference": 280,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 666.0,
        "minimum": 95.14,
        "preference": 274,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 666.0,
        "minimum": 95.14,
        "preference": 285,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 665.0,
        "minimum": 95.0,
        "preference": 290,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 664.0,
        "minimum": 94.86,
        "preference": 285,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 663.04,
        "minimum": 94.72,
        "preference": 277,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 663.0,
        "minimum": 94.71,
        "preference": 285,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 662.0,
        "minimum": 94.57,
        "preference": 278,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 660.0,
        "minimum": 94.29,
        "preference": 284,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 660.0,
        "minimum": 94.29,
        "preference": 279,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة نينوى",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 659.0,
        "minimum": 94.14,
        "preference": 270,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 656.0,
        "minimum": 93.71,
        "preference": 282,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 656.0,
        "minimum": 93.71,
        "preference": 277,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 655.0,
        "minimum": 93.57,
        "preference": 278,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة تلعفر",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 653.0,
        "minimum": 93.29,
        "preference": 267,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة تلعفر",
        "college": "كلية التمريض",
        "department": "كلية التمريض",
        "total": 652.0,
        "minimum": 93.14,
        "preference": 276,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 585.0,
        "minimum": 83.57,
        "preference": 253,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 563.0,
        "minimum": 80.43,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 543.0,
        "minimum": 77.57,
        "preference": 202,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 530.0,
        "minimum": 75.71,
        "preference": 227,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفلوجة",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 522.0,
        "minimum": 74.57,
        "preference": 228,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 516.0,
        "minimum": 73.71,
        "preference": 211,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 510.0,
        "minimum": 72.86,
        "preference": 206,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 509.0,
        "minimum": 72.71,
        "preference": 218,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 505.0,
        "minimum": 72.14,
        "preference": 208,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 491.0,
        "minimum": 70.14,
        "preference": 180,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القاسم الخضراء",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 490.0,
        "minimum": 70.0,
        "preference": 185,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 490.0,
        "minimum": 70.0,
        "preference": 198,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري/الحي",
        "total": 490.0,
        "minimum": 70.0,
        "preference": 221,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الشطرة",
        "college": "كلية الطب البيطري",
        "department": "كلية الطب البيطري",
        "total": 490.0,
        "minimum": 70.0,
        "preference": 209,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 443.0,
        "minimum": 63.29,
        "preference": 160,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "علوم الهندسة الزراعية",
        "department": "علوم الهندسة الزراعية",
        "total": 422.0,
        "minimum": 60.29,
        "preference": 176,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 388.0,
        "minimum": 55.43,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 387.0,
        "minimum": 55.29,
        "preference": 157,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تلعفر",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 386.68,
        "minimum": 55.24,
        "preference": 163,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 386.0,
        "minimum": 55.14,
        "preference": 152,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سامراء",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة/بلد",
        "total": 386.0,
        "minimum": 55.14,
        "preference": 172,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 386.0,
        "minimum": 55.14,
        "preference": 152,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 156,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الزراعة والغابات",
        "department": "كلية الزراعة والغابات",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 153,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القاسم الخضراء",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "النباتات الطبية والصناعية",
        "department": "النباتات الطبية والصناعية",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 151,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الزراعة",
        "department": "كلية الزراعة",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الزراعة والاهوار",
        "department": "كلية الزراعة والاهوار",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 161,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية اللغات",
        "department": "كلية اللغات",
        "total": 559.0,
        "minimum": 79.86,
        "preference": 161,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية اللغات",
        "department": "كلية اللغات",
        "total": 539.0,
        "minimum": 77.0,
        "preference": 172,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة النهرين",
        "college": "كلية اقتصاديات الاعمال",
        "department": "كلية اقتصاديات الاعمال",
        "total": 513.0,
        "minimum": 73.29,
        "preference": 124,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 490.0,
        "minimum": 70.0,
        "preference": 137,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد/القرنة",
        "total": 478.0,
        "minimum": 68.29,
        "preference": 141,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 477.0,
        "minimum": 68.14,
        "preference": 134,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 467.0,
        "minimum": 66.71,
        "preference": 126,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 459.0,
        "minimum": 65.57,
        "preference": 126,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 459.0,
        "minimum": 65.57,
        "preference": 127,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكرخ للعلوم",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 458.0,
        "minimum": 65.43,
        "preference": 124,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 452.0,
        "minimum": 64.57,
        "preference": 107,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 449.0,
        "minimum": 64.14,
        "preference": 137,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 446.0,
        "minimum": 63.71,
        "preference": 113,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 445.0,
        "minimum": 63.57,
        "preference": 107,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 441.0,
        "minimum": 63.0,
        "preference": 126,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 437.0,
        "minimum": 62.43,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 430.0,
        "minimum": 61.43,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 430.0,
        "minimum": 61.43,
        "preference": 111,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد/الشرقاط",
        "total": 428.0,
        "minimum": 61.14,
        "preference": 127,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سامراء",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 421.0,
        "minimum": 60.14,
        "preference": 118,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 421.0,
        "minimum": 60.14,
        "preference": 122,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 104,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 106,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الحمدانية",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 107,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفلوجة",
        "college": "كلية الادارة والاقتصاد",
        "department": "كلية الادارة والاقتصاد",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية التربية للبنات-قسم اللغة الانكليزية",
        "department": "كلية التربية للبنات-قسم اللغة الانكليزية",
        "total": 608.0,
        "minimum": 86.86,
        "preference": 100,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 523.0,
        "minimum": 74.71,
        "preference": 184,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 522.0,
        "minimum": 74.57,
        "preference": 199,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 519.0,
        "minimum": 74.14,
        "preference": 140,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 519.0,
        "minimum": 74.14,
        "preference": 167,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 516.0,
        "minimum": 73.71,
        "preference": 148,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 513.0,
        "minimum": 73.29,
        "preference": 190,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية التربية",
        "department": "كلية التربية",
        "total": 512.0,
        "minimum": 73.14,
        "preference": 159,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 511.0,
        "minimum": 73.0,
        "preference": 191,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 506.0,
        "minimum": 72.29,
        "preference": 133,
        "branch": "فنون",
        "gender": "أنثى"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية التربية",
        "department": "كلية التربية/القرنة",
        "total": 500.0,
        "minimum": 71.43,
        "preference": 144,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 499.0,
        "minimum": 71.29,
        "preference": 192,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 497.0,
        "minimum": 71.0,
        "preference": 148,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 497.0,
        "minimum": 71.0,
        "preference": 161,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 491.0,
        "minimum": 70.14,
        "preference": 230,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية التربية ابن رشد للعلوم الانسانية",
        "department": "كلية التربية ابن رشد للعلوم الانسانية",
        "total": 488.0,
        "minimum": 69.71,
        "preference": 146,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 487.0,
        "minimum": 69.57,
        "preference": 136,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية التربية",
        "department": "كلية التربية",
        "total": 487.0,
        "minimum": 69.57,
        "preference": 146,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة/ابن الهيثم",
        "total": 485.0,
        "minimum": 69.29,
        "preference": 208,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 482.0,
        "minimum": 68.86,
        "preference": 126,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية التربية للبنات-قسم رياض الاطفال",
        "department": "كلية التربية للبنات-قسم رياض الاطفال",
        "total": 481.0,
        "minimum": 68.71,
        "preference": 158,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية التربية",
        "department": "كلية التربية",
        "total": 480.0,
        "minimum": 68.57,
        "preference": 116,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 480.0,
        "minimum": 68.57,
        "preference": 191,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية التربية",
        "department": "كلية التربية",
        "total": 479.0,
        "minimum": 68.43,
        "preference": 130,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 476.0,
        "minimum": 68.0,
        "preference": 145,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 475.0,
        "minimum": 67.86,
        "preference": 136,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية التربية",
        "department": "كلية التربية",
        "total": 475.0,
        "minimum": 67.86,
        "preference": 131,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية التربية للعلوم الانسانية-قسم العلوم التربوية والنفسية",
        "department": "كلية التربية للعلوم الانسانية-قسم العلوم التربوية والنفسية",
        "total": 475.0,
        "minimum": 67.86,
        "preference": 125,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 470.0,
        "minimum": 67.14,
        "preference": 168,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 469.0,
        "minimum": 67.0,
        "preference": 175,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 469.0,
        "minimum": 67.0,
        "preference": 126,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 468.0,
        "minimum": 66.86,
        "preference": 185,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القاسم الخضراء",
        "college": "كلية التربية",
        "department": "كلية التربية",
        "total": 467.0,
        "minimum": 66.71,
        "preference": 139,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الشطرة",
        "college": "كلية التربية",
        "department": "كلية التربية/الدواية-قسم الفيزياء",
        "total": 467.0,
        "minimum": 66.71,
        "preference": 144,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 461.0,
        "minimum": 65.86,
        "preference": 137,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية التربية",
        "department": "كلية التربية/القائم",
        "total": 460.0,
        "minimum": 65.71,
        "preference": 117,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 460.0,
        "minimum": 65.71,
        "preference": 175,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية التربية للبنات-قسم رياض الاطفال والتربية الخاصة",
        "department": "كلية التربية للبنات-قسم رياض الاطفال والتربية الخاصة",
        "total": 460.0,
        "minimum": 65.71,
        "preference": 138,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 460.0,
        "minimum": 65.71,
        "preference": 157,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 458.0,
        "minimum": 65.43,
        "preference": 109,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 458.0,
        "minimum": 65.43,
        "preference": 124,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 457.0,
        "minimum": 65.29,
        "preference": 142,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سامراء",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 455.0,
        "minimum": 65.0,
        "preference": 188,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية التربية",
        "department": "كلية التربية/الطارمية",
        "total": 446.0,
        "minimum": 63.71,
        "preference": 126,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الحمدانية",
        "college": "كلية التربية للعلوم الصرفة",
        "department": "كلية التربية للعلوم الصرفة",
        "total": 444.0,
        "minimum": 63.43,
        "preference": 165,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 444.0,
        "minimum": 63.43,
        "preference": 130,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الفلوجة",
        "college": "كلية التربية",
        "department": "كلية التربية",
        "total": 443.0,
        "minimum": 63.29,
        "preference": 133,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الشطرة",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 443.0,
        "minimum": 63.29,
        "preference": 124,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الحمدانية",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 438.0,
        "minimum": 62.57,
        "preference": 126,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية التربية للبنات-قسم رياض الاطفال",
        "department": "كلية التربية للبنات-قسم رياض الاطفال",
        "total": 438.0,
        "minimum": 62.57,
        "preference": 124,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة سامراء",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 438.0,
        "minimum": 62.57,
        "preference": 182,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الشطرة",
        "college": "كلية التربية للبنات-قسم رياض الاطفال",
        "department": "كلية التربية للبنات-قسم رياض الاطفال",
        "total": 436.0,
        "minimum": 62.29,
        "preference": 136,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 435.0,
        "minimum": 62.14,
        "preference": 147,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية التربية المقداد",
        "department": "كلية التربية المقداد/المقدادية",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 109,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية التربية للعلوم الانسانية",
        "department": "كلية التربية للعلوم الانسانية",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 121,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تلعفر",
        "college": "كلية التربية-قسم علوم الحاسوب",
        "department": "كلية التربية-قسم علوم الحاسوب",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 112,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية التربية",
        "department": "كلية التربية/طوزخورماتو",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 115,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية التربية للبنات",
        "department": "كلية التربية للبنات",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 107,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية التربية",
        "department": "كلية التربية",
        "total": 423.0,
        "minimum": 60.43,
        "preference": 128,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الآداب-قسم علم النفس",
        "department": "كلية الآداب-قسم علم النفس",
        "total": 585.0,
        "minimum": 83.57,
        "preference": 189,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الآداب-قسم الترجمة",
        "department": "كلية الآداب-قسم الترجمة",
        "total": 574.0,
        "minimum": 82.0,
        "preference": 184,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الآداب-قسم علم النفس",
        "department": "كلية الآداب-قسم علم النفس",
        "total": 572.0,
        "minimum": 81.71,
        "preference": 165,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 539.0,
        "minimum": 77.0,
        "preference": 159,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الآداب-قسم الفلسفة",
        "department": "كلية الآداب-قسم الفلسفة",
        "total": 530.0,
        "minimum": 75.71,
        "preference": 167,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الآداب-قسم الترجمة",
        "department": "كلية الآداب-قسم الترجمة",
        "total": 514.0,
        "minimum": 73.43,
        "preference": 139,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الآداب-قسم علم النفس",
        "department": "كلية الآداب-قسم علم النفس",
        "total": 506.0,
        "minimum": 72.29,
        "preference": 151,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 490.0,
        "minimum": 70.0,
        "preference": 161,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 488.0,
        "minimum": 69.71,
        "preference": 167,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 486.0,
        "minimum": 69.43,
        "preference": 114,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 478.0,
        "minimum": 68.29,
        "preference": 141,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 477.0,
        "minimum": 68.14,
        "preference": 109,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الآداب-قسم الاعلام",
        "department": "كلية الآداب-قسم الاعلام",
        "total": 475.0,
        "minimum": 67.86,
        "preference": 117,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 466.0,
        "minimum": 66.57,
        "preference": 138,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 456.0,
        "minimum": 65.14,
        "preference": 120,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 451.0,
        "minimum": 64.43,
        "preference": 131,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 447.0,
        "minimum": 63.86,
        "preference": 124,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الآداب-قسم الاعلام",
        "department": "كلية الآداب-قسم الاعلام",
        "total": 446.0,
        "minimum": 63.71,
        "preference": 118,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الآداب-قسم علم النفس",
        "department": "كلية الآداب-قسم علم النفس",
        "total": 445.0,
        "minimum": 63.57,
        "preference": 101,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الآداب-قسم علم النفس",
        "department": "كلية الآداب-قسم علم النفس",
        "total": 444.0,
        "minimum": 63.43,
        "preference": 117,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 443.0,
        "minimum": 63.29,
        "preference": 123,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 442.0,
        "minimum": 63.14,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الآداب-قسم علم النفس",
        "department": "كلية الآداب-قسم علم النفس",
        "total": 440.0,
        "minimum": 62.86,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الآداب-قسم المعلومات وتقنيات المعرفة",
        "department": "كلية الآداب-قسم المعلومات وتقنيات المعرفة",
        "total": 438.0,
        "minimum": 62.57,
        "preference": 144,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 437.0,
        "minimum": 62.43,
        "preference": 108,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 433.0,
        "minimum": 61.86,
        "preference": 111,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 428.0,
        "minimum": 61.14,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 427.0,
        "minimum": 61.0,
        "preference": 122,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 425.0,
        "minimum": 60.71,
        "preference": 105,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 425.0,
        "minimum": 60.71,
        "preference": 125,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 423.0,
        "minimum": 60.43,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سامراء",
        "college": "كلية الآداب",
        "department": "كلية الآداب",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية التربية الأساسية-قسم اللغة الانكليزية",
        "department": "كلية التربية الأساسية-قسم اللغة الانكليزية",
        "total": 547.0,
        "minimum": 78.14,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "department": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "total": 501.0,
        "minimum": 71.57,
        "preference": 148,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية/سوق الشيوخ-قسم معلم الصفوف الأولى",
        "total": 494.0,
        "minimum": 70.57,
        "preference": 149,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "department": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "total": 494.0,
        "minimum": 70.57,
        "preference": 128,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية/سوق الشيوخ-قسم التربية الخاصة",
        "total": 492.0,
        "minimum": 70.29,
        "preference": 165,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "department": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "total": 484.0,
        "minimum": 69.14,
        "preference": 136,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة المثنى",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية",
        "total": 483.0,
        "minimum": 69.0,
        "preference": 138,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "department": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "total": 483.0,
        "minimum": 69.0,
        "preference": 146,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية التربية الأساسية-قسم معلم الصفوف الأولى",
        "department": "كلية التربية الأساسية-قسم معلم الصفوف الأولى",
        "total": 477.0,
        "minimum": 68.14,
        "preference": 122,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية التربية الأساسية-قسم رياض الاطفال",
        "department": "كلية التربية الأساسية-قسم رياض الاطفال",
        "total": 473.0,
        "minimum": 67.57,
        "preference": 139,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة سومر",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية",
        "total": 468.0,
        "minimum": 66.86,
        "preference": 123,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية/العزيزية-قسم معلم الصفوف الاولى",
        "total": 463.0,
        "minimum": 66.14,
        "preference": 123,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية التربية الاساسية",
        "department": "كلية التربية الاساسية",
        "total": 456.0,
        "minimum": 65.14,
        "preference": 112,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية",
        "total": 454.0,
        "minimum": 64.86,
        "preference": 140,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية/الشرقاط",
        "total": 451.0,
        "minimum": 64.43,
        "preference": 122,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ميسان",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية",
        "total": 451.0,
        "minimum": 64.43,
        "preference": 118,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية/العزيزية",
        "total": 449.0,
        "minimum": 64.14,
        "preference": 106,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية",
        "total": 449.0,
        "minimum": 64.14,
        "preference": 119,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية التربية الأساسية-قسم رياض الاطفال",
        "department": "كلية التربية الأساسية-قسم رياض الاطفال",
        "total": 448.0,
        "minimum": 64.0,
        "preference": 132,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية/العزيزية-قسم رياض الاطفال",
        "total": 445.0,
        "minimum": 63.57,
        "preference": 130,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "department": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "total": 445.0,
        "minimum": 63.57,
        "preference": 123,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية",
        "total": 443.0,
        "minimum": 63.29,
        "preference": 130,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "department": "كلية التربية الأساسية-قسم معلم الصفوف الاولى",
        "total": 443.0,
        "minimum": 63.29,
        "preference": 121,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية التربية الاساسية-قسم رياض الاطفال",
        "department": "كلية التربية الاساسية-قسم رياض الاطفال",
        "total": 442.0,
        "minimum": 63.14,
        "preference": 112,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية",
        "total": 438.0,
        "minimum": 62.57,
        "preference": 112,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية/حديثة-قسم معلم الصفوف الاولى",
        "total": 437.0,
        "minimum": 62.43,
        "preference": 133,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية التربية الأساسية-قسم رياض الاطفال للبنات",
        "department": "كلية التربية الأساسية-قسم رياض الاطفال للبنات",
        "total": 437.0,
        "minimum": 62.43,
        "preference": 122,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية التربية الأساسية-قسم التربية الخاصة",
        "department": "كلية التربية الأساسية-قسم التربية الخاصة",
        "total": 436.0,
        "minimum": 62.29,
        "preference": 147,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تلعفر",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 131,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية/حديثة",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية التربية الأساسية",
        "department": "كلية التربية الأساسية",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 108,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية التربية الأساسية-قسم رياض الاطفال",
        "department": "كلية التربية الأساسية-قسم رياض الاطفال",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 119,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية العلوم السياحية",
        "department": "كلية العلوم السياحية",
        "total": 423.0,
        "minimum": 60.43,
        "preference": 125,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة المستنصرية",
        "college": "كلية العلوم السياحية",
        "department": "كلية العلوم السياحية",
        "total": 417.0,
        "minimum": 59.57,
        "preference": 108,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الاثار",
        "department": "كلية الاثار/سوق الشيوخ",
        "total": 413.0,
        "minimum": 59.0,
        "preference": 110,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الاثار",
        "department": "كلية الاثار",
        "total": 404.0,
        "minimum": 57.71,
        "preference": 126,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الاثار",
        "department": "كلية الاثار",
        "total": 400.0,
        "minimum": 57.14,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الاثار",
        "department": "كلية الاثار/سوق الشيوخ",
        "total": 391.0,
        "minimum": 55.86,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الاثار",
        "department": "كلية الاثار",
        "total": 388.0,
        "minimum": 55.43,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الاثار",
        "department": "كلية الاثار",
        "total": 387.0,
        "minimum": 55.29,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الاثار",
        "department": "كلية الاثار",
        "total": 386.0,
        "minimum": 55.14,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الاثار",
        "department": "كلية الاثار",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 104,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كربلاء",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 461.0,
        "minimum": 65.86,
        "preference": 164,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 441.0,
        "minimum": 63.0,
        "preference": 158,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 437.0,
        "minimum": 62.43,
        "preference": 148,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 430.0,
        "minimum": 61.43,
        "preference": 148,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية الفقه",
        "department": "كلية الفقه",
        "total": 427.0,
        "minimum": 61.0,
        "preference": 147,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 423.0,
        "minimum": 60.43,
        "preference": 157,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 401.0,
        "minimum": 57.29,
        "preference": 139,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 394.0,
        "minimum": 56.29,
        "preference": 131,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 391.0,
        "minimum": 55.86,
        "preference": 136,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الانبار",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 387.0,
        "minimum": 55.29,
        "preference": 137,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة سامراء",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 128,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفلوجة",
        "college": "كلية العلوم الاسلامية",
        "department": "كلية العلوم الاسلامية",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 122,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة تكريت",
        "college": "كلية علوم الاغذية",
        "department": "كلية علوم الاغذية/الشرقاط",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 166,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القاسم الخضراء",
        "college": "كلية علوم الاغذية",
        "department": "كلية علوم الاغذية",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 152,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الاعلام",
        "department": "كلية الاعلام",
        "total": 521.0,
        "minimum": 74.43,
        "preference": 163,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة العراقية",
        "college": "كلية الاعلام",
        "department": "كلية الاعلام",
        "total": 497.0,
        "minimum": 71.0,
        "preference": 153,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الاعلام",
        "department": "كلية الاعلام",
        "total": 437.0,
        "minimum": 62.43,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الاعلام",
        "department": "كلية الاعلام",
        "total": 427.0,
        "minimum": 61.0,
        "preference": 123,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة كركوك",
        "college": "كلية الاعلام",
        "department": "كلية الاعلام",
        "total": 425.0,
        "minimum": 60.71,
        "preference": 128,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ذي قار",
        "college": "كلية الاعلام",
        "department": "كلية الاعلام",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 130,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 510.0,
        "minimum": 72.86,
        "preference": 121,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 467.0,
        "minimum": 66.71,
        "preference": 137,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 457.0,
        "minimum": 65.29,
        "preference": 151,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 125,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بغداد",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 432.0,
        "minimum": 61.71,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة واسط",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 430.0,
        "minimum": 61.43,
        "preference": 100,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 430.0,
        "minimum": 61.43,
        "preference": 101,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 429.0,
        "minimum": 61.29,
        "preference": 117,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الشطرة",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 428.0,
        "minimum": 61.14,
        "preference": 120,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة بابل",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 421.0,
        "minimum": 60.14,
        "preference": 106,
        "branch": "فنون",
        "gender": "مختلط"
    },
    {
        "university": "جامعة القادسية",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 114,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة ديالى",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 106,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الموصل",
        "college": "كلية الفنون الجميلة",
        "department": "كلية الفنون الجميلة",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 118,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة",
        "college": "كلية علوم البحار",
        "department": "كلية علوم البحار",
        "total": 483.0,
        "minimum": 69.0,
        "preference": 196,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكوفة",
        "college": "كلية التخطيط العمراني",
        "department": "كلية التخطيط العمراني",
        "total": 445.0,
        "minimum": 63.57,
        "preference": 168,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة للنفط والغاز",
        "college": "كلية الادارة الصناعية للنفط والغاز-قسم اقتصاديات النفط والغاز",
        "department": "كلية الادارة الصناعية للنفط والغاز-قسم اقتصاديات النفط والغاز",
        "total": 605.0,
        "minimum": 86.43,
        "preference": 243,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة للنفط والغاز",
        "college": "كلية الادارة الصناعية للنفط والغاز-قسم ادارة المشاريع النفطية",
        "department": "كلية الادارة الصناعية للنفط والغاز-قسم ادارة المشاريع النفطية",
        "total": 597.0,
        "minimum": 85.29,
        "preference": 234,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة للنفط والغاز",
        "college": "كلية الادارة الصناعية للنفط والغاز-قسم ادارة وتسويق النفط والغاز",
        "department": "كلية الادارة الصناعية للنفط والغاز-قسم ادارة وتسويق النفط والغاز",
        "total": 584.0,
        "minimum": 83.43,
        "preference": 247,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة البصرة للنفط والغاز",
        "college": "كلية الادارة الصناعية للنفط والغاز-قسم المحاسبة النفطية",
        "department": "كلية الادارة الصناعية للنفط والغاز-قسم المحاسبة النفطية",
        "total": 574.0,
        "minimum": 82.0,
        "preference": 228,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الكرخ للعلوم",
        "college": "كلية التحسس النائي والجيوفيزياء",
        "department": "كلية التحسس النائي والجيوفيزياء",
        "total": 455.0,
        "minimum": 65.0,
        "preference": 187,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "كلية التقنيات الصحية والطبية",
        "department": "كلية التقنيات الصحية والطبية/بغداد",
        "total": 683.0,
        "minimum": 97.57,
        "preference": 300,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الصحية والطبية",
        "department": "الكلية التقنية الصحية والطبية/البصرة-قسم تقنيات المختبرات الطبية",
        "total": 682.0,
        "minimum": 97.43,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "كلية التقنيات الصحية والطبية",
        "department": "كلية التقنيات الصحية والطبية/بغداد-قسم التقنيات البصرية",
        "total": 679.0,
        "minimum": 97.0,
        "preference": 286,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الصحية والطبية",
        "department": "الكلية التقنية الصحية والطبية/الكوفة",
        "total": 676.0,
        "minimum": 96.57,
        "preference": 287,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الصحية والطبية",
        "department": "الكلية التقنية الصحية والطبية/بابل",
        "total": 673.0,
        "minimum": 96.14,
        "preference": 281,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "كلية التقنيات الصحية والطبية",
        "department": "كلية التقنيات الصحية والطبية/بغداد-قسم تقنيات صحة المجتمع",
        "total": 667.0,
        "minimum": 95.29,
        "preference": 293,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "كلية التقنيات الصحية والطبية",
        "department": "كلية التقنيات الصحية والطبية/بغداد-قسم تقنيات العلاج الطبيعي",
        "total": 667.0,
        "minimum": 95.29,
        "preference": 284,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية التقنيات الصحية والطبية",
        "department": "كلية التقنيات الصحية والطبية/كركوك-قسم تقنيات المختبرات الطبية",
        "total": 663.0,
        "minimum": 94.71,
        "preference": 283,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الصحية والطبية",
        "department": "الكلية التقنية الصحية والطبية/البصرة-قسم تقنيات العلاج الطبيعي",
        "total": 660.0,
        "minimum": 94.29,
        "preference": 283,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الصحية والطبية",
        "department": "الكلية التقنية الصحية والطبية/الكوفة-قسم تقنيات صحة المجتمع",
        "total": 654.0,
        "minimum": 93.43,
        "preference": 272,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الصحية والطبية",
        "department": "الكلية التقنية الصحية والطبية/البصرة-قسم تقنيات صحة المجتمع",
        "total": 654.0,
        "minimum": 93.43,
        "preference": 280,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية بعقوبة",
        "department": "الكلية التقنية بعقوبة/التخصصات الطبية-قسم تقنيات المختبرات الطبية",
        "total": 654.0,
        "minimum": 93.43,
        "preference": 279,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الصحية والطبية",
        "department": "الكلية التقنية الصحية والطبية/البصرة-قسم تقنيات الكلية الصناعية",
        "total": 654.0,
        "minimum": 93.43,
        "preference": 281,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية التقنيات الصحية والطبية",
        "department": "كلية التقنيات الصحية والطبية/كركوك-قسم تقنيات الكلية الصناعية",
        "total": 647.0,
        "minimum": 92.43,
        "preference": 276,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الكوت",
        "department": "الكلية التقنية الكوت/التخصصات الصحية والطبية-قسم تقنيات صحة المجتمع",
        "total": 647.0,
        "minimum": 92.43,
        "preference": 272,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية التقنيات الصحية والطبية",
        "department": "كلية التقنيات الصحية والطبية/الدور-قسم تقنيات البصريات",
        "total": 641.0,
        "minimum": 91.57,
        "preference": 272,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الاقسام الطبية",
        "department": "الكلية التقنية الاقسام الطبية/المسيب",
        "total": 639.0,
        "minimum": 91.29,
        "preference": 262,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية التقنيات الصحية والطبية",
        "department": "كلية التقنيات الصحية والطبية/كركوك-قسم تقنيات التغذية العلاجية",
        "total": 639.0,
        "minimum": 91.29,
        "preference": 281,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الشطرة",
        "department": "الكلية التقنية الشطرة/الاقسام الطبية-قسم تقنيات المختبرات الطبية",
        "total": 636.0,
        "minimum": 90.86,
        "preference": 278,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "كلية تقنيات التاهيل الطبي والاطراف الصناعية",
        "department": "كلية تقنيات التاهيل الطبي والاطراف الصناعية/الكوفة",
        "total": 625.0,
        "minimum": 89.29,
        "preference": 261,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية التقنيات الصحية والطبية",
        "department": "كلية التقنيات الصحية والطبية/كركوك-قسم تقنيات السلامة المهنية والطب المهني",
        "total": 606.0,
        "minimum": 86.57,
        "preference": 252,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية التقنيات الصحية والطبية",
        "department": "كلية التقنيات الصحية والطبية/الدور-قسم تقنيات العلاج الطبيعي",
        "total": 602.0,
        "minimum": 86.0,
        "preference": 247,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/البصرة-قسم هندسة تقنيات الوقود والطاقة",
        "total": 647.0,
        "minimum": 92.43,
        "preference": 272,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/البصرة-قسم التقنيات الكيميائية والبتروكيميائية",
        "total": 641.0,
        "minimum": 91.57,
        "preference": 273,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية الكهربائية",
        "department": "الكلية التقنية الهندسية الكهربائية/بغداد-قسم هندسة تقنيات الاجهزة الطبية",
        "total": 641.0,
        "minimum": 91.57,
        "preference": 277,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/البصرة-قسم تقنيات الهندسة الكهربائية",
        "total": 637.0,
        "minimum": 91.0,
        "preference": 272,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/البصرة-قسم هندسة تقنيات ميكانيك الحراريات",
        "total": 632.0,
        "minimum": 90.29,
        "preference": 276,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الهندسية للنفط والطاقة",
        "department": "الكلية التقنية الهندسية للنفط والطاقة/السماوة-قسم هندسة تقنيات النفط والغاز",
        "total": 631.0,
        "minimum": 90.14,
        "preference": 280,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/البصرة-قسم هندسة تقنيات السيطرة والاتمتة",
        "total": 630.0,
        "minimum": 90.0,
        "preference": 285,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/البصرة-قسم هندسة تقنيات البيئة والتلوث",
        "total": 623.0,
        "minimum": 89.0,
        "preference": 258,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية للذكاء الاصطناعي",
        "department": "الكلية التقنية الهندسية للذكاء الاصطناعي/بغداد-قسم هندسة تقنيات الامن السيبراني",
        "total": 611.0,
        "minimum": 87.29,
        "preference": 262,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي",
        "department": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي/كركوك-قسم هندسة تقنيات الذكاء الاصطناعي",
        "total": 604.0,
        "minimum": 86.29,
        "preference": 276,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي",
        "department": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي/كركوك-قسم هندسة تقنيات الامن السيبراني",
        "total": 601.0,
        "minimum": 85.86,
        "preference": 272,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي",
        "department": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي/الموصل-قسم هندسة تقنيات الامن السيبراني",
        "total": 597.0,
        "minimum": 85.29,
        "preference": 269,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الاقسام الهندسية",
        "department": "الكلية التقنية الاقسام الهندسية/ذي قار-قسم هندسة تقنيات الامن السيبراني",
        "total": 596.0,
        "minimum": 85.14,
        "preference": 236,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الهندسية للنفط والطاقة",
        "department": "الكلية التقنية الهندسية للنفط والطاقة/السماوة-قسم هندسة الحفر وانتاج النفط والغاز",
        "total": 595.0,
        "minimum": 85.0,
        "preference": 250,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية للذكاء الاصطناعي",
        "department": "الكلية التقنية الهندسية للذكاء الاصطناعي/بغداد-قسم هندسة تقنيات الذكاء الاصطناعي",
        "total": 593.0,
        "minimum": 84.71,
        "preference": 251,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/الموصل-قسم هندسة تقنيات الاجهزة الطبية",
        "total": 592.0,
        "minimum": 84.57,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي",
        "department": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي/الموصل-قسم هندسة تقنيات الذكاء الاصطناعي",
        "total": 588.0,
        "minimum": 84.0,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية الكهربائية",
        "department": "الكلية التقنية الهندسية الكهربائية/بغداد-قسم هندسة تقنيات الحاسوب",
        "total": 587.0,
        "minimum": 83.86,
        "preference": 250,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "كلية البوليتكنك القرنة",
        "department": "كلية البوليتكنك القرنة/التخصصات الهندسية-قسم تقنيات هندسة الحاسوب والذكاء الاصطناعي",
        "total": 584.0,
        "minimum": 83.43,
        "preference": 260,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الهندسية للنفط والطاقة",
        "department": "الكلية التقنية الهندسية للنفط والطاقة/السماوة-قسم هندسة تقنيات الوقود والطاقة",
        "total": 583.0,
        "minimum": 83.29,
        "preference": 249,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/بغداد-قسم هندسة تقنيات الوقود والطاقة",
        "total": 576.0,
        "minimum": 82.29,
        "preference": 238,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية الكهربائية",
        "department": "الكلية التقنية الهندسية الكهربائية/بغداد-قسم تقنيات الهندسة الكهربائية",
        "total": 576.0,
        "minimum": 82.29,
        "preference": 236,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/النجف-قسم هندسة تقنيات الطيران",
        "total": 572.0,
        "minimum": 81.71,
        "preference": 263,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/كركوك-قسم هندسة تقنيات الاجهزة الطبية",
        "total": 571.0,
        "minimum": 81.57,
        "preference": 234,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/بغداد-قسم هندسة تقنيات البناء والانشاءات",
        "total": 570.0,
        "minimum": 81.43,
        "preference": 244,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "كلية البوليتكنك القرنة",
        "department": "كلية البوليتكنك القرنة/التخصصات الهندسية-قسم تقنيات الهندسة الكهربائية",
        "total": 566.0,
        "minimum": 80.86,
        "preference": 241,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/بغداد-قسم هندسة تقنيات الميكاترونكس",
        "total": 563.24,
        "minimum": 80.46,
        "preference": 244,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/النجف-قسم هندسة تقنيات الفيزياء الصحية والعلاج الاشعاعي",
        "total": 562.0,
        "minimum": 80.29,
        "preference": 222,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية الكهربائية",
        "department": "الكلية التقنية الهندسية الكهربائية/بغداد-قسم هندسة تقنيات السيطرة والاتمتة",
        "total": 562.0,
        "minimum": 80.29,
        "preference": 236,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الاقسام الهندسية",
        "department": "الكلية التقنية الاقسام الهندسية/ميسان-قسم هندسة تقنيات البناء والانشاءات",
        "total": 558.0,
        "minimum": 79.71,
        "preference": 209,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/النجف-قسم هندسة تقنيات الليزر والالكترونيات البصرية",
        "total": 557.0,
        "minimum": 79.57,
        "preference": 202,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الاقسام الهندسية",
        "department": "الكلية التقنية الاقسام الهندسية/ميسان-قسم هندسة النظم الكهروميكانيكية",
        "total": 551.0,
        "minimum": 78.71,
        "preference": 232,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية الكهربائية",
        "department": "الكلية التقنية الهندسية الكهربائية/بغداد-هندسة تقنيات الفضاء والطائرات المسيرة",
        "total": 550.0,
        "minimum": 78.57,
        "preference": 202,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي",
        "department": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي/كركوك-قسم هندسة تقنيات المعلومات وشبكات الحاسوب",
        "total": 549.0,
        "minimum": 78.43,
        "preference": 223,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي",
        "department": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي/الموصل-قسم هندسة تقنيات الحاسوب",
        "total": 549.0,
        "minimum": 78.43,
        "preference": 210,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/النجف-قسم هندسة تقنيات الكترونيات الطيران",
        "total": 548.0,
        "minimum": 78.29,
        "preference": 200,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/بغداد-قسم هندسة تقنيات المساحة",
        "total": 546.0,
        "minimum": 78.0,
        "preference": 246,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/النجف-قسم هندسة تقنيات الاتصالات",
        "total": 538.0,
        "minimum": 76.86,
        "preference": 205,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي",
        "department": "الكلية التقنية الهندسية للحاسوب والذكاء الاصطناعي/الموصل-قسم هندسة تقنيات الحوسبة السحابية وانترنيت الاشياء",
        "total": 534.0,
        "minimum": 76.29,
        "preference": 206,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/بغداد-قسم هندسة تقنية المواد",
        "total": 527.0,
        "minimum": 75.29,
        "preference": 210,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/النجف-قسم هندسة تقنيات البناء والانشاءات",
        "total": 523.0,
        "minimum": 74.71,
        "preference": 206,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/الموصل-قسم هندسة تقنيات البناء والانشاءات",
        "total": 519.96,
        "minimum": 74.28,
        "preference": 182,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/بغداد-قسم هندسة تقنيات ميكانيك القوى",
        "total": 518.0,
        "minimum": 74.0,
        "preference": 224,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/الموصل-قسم هندسة تقنيات الطائرات المسيرة",
        "total": 516.0,
        "minimum": 73.71,
        "preference": 198,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/كركوك-قسم هندسة تقنيات العمارة والبناء",
        "total": 511.0,
        "minimum": 73.0,
        "preference": 219,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "كلية البوليتكنك بغداد",
        "department": "كلية البوليتكنك بغداد/التخصصات الهندسية-قسم تقنيات هندسة الالكترونيك والذكاء الاصطناعي",
        "total": 506.0,
        "minimum": 72.29,
        "preference": 178,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/النجف-قسم هندسة تقنيات ميكانيك القوى",
        "total": 506.0,
        "minimum": 72.29,
        "preference": 198,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "كلية البوليتكنك كربلاء",
        "department": "كلية البوليتكنك كربلاء/التخصصات الهندسية-قسم تقنيات هندسة تكنولوجيا المعلومات",
        "total": 500.0,
        "minimum": 71.43,
        "preference": 220,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية هندسة تقنيات النفط والغاز",
        "department": "كلية هندسة تقنيات النفط والغاز/كركوك-قسم هندسة تقنيات الوقود والطاقة",
        "total": 496.0,
        "minimum": 70.86,
        "preference": 194,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الاقسام الهندسية",
        "department": "الكلية التقنية الاقسام الهندسية/المسيب-قسم هندسة تقنيات ميكانيك الطائرات والطائرات المسيرة",
        "total": 496.0,
        "minimum": 70.86,
        "preference": 212,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/الموصل-قسم تقنيات الهندسة الكهربائية",
        "total": 495.0,
        "minimum": 70.71,
        "preference": 209,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/الموصل-قسم هندسة تقنيات الصناعات الكيمياوية والنفطية",
        "total": 493.0,
        "minimum": 70.43,
        "preference": 213,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "كلية البوليتكنك كربلاء",
        "department": "كلية البوليتكنك كربلاء/التخصصات الهندسية-قسم تقنيات هندسة البناء والانشاءات",
        "total": 475.0,
        "minimum": 67.86,
        "preference": 171,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الاقسام الهندسية",
        "department": "الكلية التقنية الاقسام الهندسية/ذي قار-قسم هندسة تقنيات النظم الكهروميكانيكية",
        "total": 475.0,
        "minimum": 67.86,
        "preference": 182,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "كلية البوليتكنك كربلاء",
        "department": "كلية البوليتكنك كربلاء/التخصصات الهندسية-قسم تقنيات الهندسة الكهربائية",
        "total": 466.0,
        "minimum": 66.57,
        "preference": 172,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية هندسة تقنيات النفط والغاز",
        "department": "كلية هندسة تقنيات النفط والغاز/كركوك-قسم هندسة تقنيات الطاقة المتجددة",
        "total": 462.0,
        "minimum": 66.0,
        "preference": 176,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الاقسام الهندسية",
        "department": "الكلية التقنية الاقسام الهندسية/المسيب-قسم تقنيات الهندسة الكهربائية",
        "total": 457.0,
        "minimum": 65.29,
        "preference": 180,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "كلية البوليتكنك بغداد",
        "department": "كلية البوليتكنك بغداد/التخصصات الهندسية-قسم تقنيات هندسة الصناعات الكيمياوية والنفطية",
        "total": 456.0,
        "minimum": 65.14,
        "preference": 198,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الكوت",
        "department": "الكلية التقنية الكوت/التخصصات الهندسية-قسم التقنيات الكهروميكانيكية",
        "total": 453.0,
        "minimum": 64.71,
        "preference": 182,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الاقسام الهندسية",
        "department": "الكلية التقنية الاقسام الهندسية/المسيب-قسم هندسة تقنيات البناء والانشاءات",
        "total": 453.0,
        "minimum": 64.71,
        "preference": 182,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الحويجة",
        "department": "الكلية التقنية الحويجة/التخصصات الهندسية-قسم هندسة تقنيات البناء والانشاءات",
        "total": 452.0,
        "minimum": 64.57,
        "preference": 158,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/كركوك-قسم هندسة تقنيات المساحة",
        "total": 452.0,
        "minimum": 64.57,
        "preference": 207,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/الموصل-قسم هندسة تقنيات ميكانيك القوى",
        "total": 450.0,
        "minimum": 64.29,
        "preference": 198,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "كلية البوليتكنك كربلاء",
        "department": "كلية البوليتكنك كربلاء/التخصصات الهندسية-قسم تقنيات هندسة الطاقة المتجددة",
        "total": 450.0,
        "minimum": 64.29,
        "preference": 167,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/كركوك-قسم هندسة تقنيات ميكانيك القوى",
        "total": 449.0,
        "minimum": 64.14,
        "preference": 185,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الحويجة",
        "department": "الكلية التقنية الحويجة/التخصصات الهندسية-قسم هندسة تقنيات الميكاترونكس",
        "total": 448.0,
        "minimum": 64.0,
        "preference": 167,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الاقسام الهندسية",
        "department": "الكلية التقنية الاقسام الهندسية/المسيب-قسم هندسة تقنيات ميكانيك القدرة",
        "total": 448.0,
        "minimum": 64.0,
        "preference": 159,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/الموصل-قسم هندسة تقنيات الجيوماتكس",
        "total": 448.0,
        "minimum": 64.0,
        "preference": 180,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الشطرة",
        "department": "الكلية التقنية الشطرة/الاقسام الهندسية-قسم هندسة تقنيات البيئة والتلوث",
        "total": 448.0,
        "minimum": 64.0,
        "preference": 172,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الاقسام الهندسية",
        "department": "الكلية التقنية الاقسام الهندسية/المسيب-قسم هندسة تقنيات المكائن والمعدات",
        "total": 448.0,
        "minimum": 64.0,
        "preference": 168,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/كركوك-قسم هندسة تقنيات الالكترونيك والسيطرة",
        "total": 448.0,
        "minimum": 64.0,
        "preference": 186,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الهندسية",
        "department": "الكلية التقنية الهندسية/كركوك-قسم هندسة تقنيات البيئة والتلوث",
        "total": 448.0,
        "minimum": 64.0,
        "preference": 174,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية بعقوبة",
        "department": "الكلية التقنية بعقوبة/التخصصات الهندسية-قسم التقنيات الكهروميكانيكية",
        "total": 448.0,
        "minimum": 64.0,
        "preference": 171,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "كلية البوليتكنك كربلاء",
        "department": "كلية البوليتكنك كربلاء/التخصصات الهندسية-قسم تقنيات الهندسة الميكانيكية",
        "total": 445.0,
        "minimum": 63.57,
        "preference": 159,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية البوليتكنك الموصل",
        "department": "كلية البوليتكنك الموصل/التخصصات الهندسية-قسم تقنيات هندسة المساحة",
        "total": 433.0,
        "minimum": 61.86,
        "preference": 184,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية البوليتكنك الحويجة",
        "department": "كلية البوليتكنك الحويجة/التخصصات الهندسية-قسم تقنيات هندسة الشبكات وبرمجيات الحاسوب",
        "total": 418.0,
        "minimum": 59.71,
        "preference": 170,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية البوليتكنك الموصل",
        "department": "كلية البوليتكنك الموصل/التخصصات الهندسية-قسم تقنيات الهندسة الالكترونية والاتصالات",
        "total": 415.0,
        "minimum": 59.29,
        "preference": 171,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية البوليتكنك الموصل",
        "department": "كلية البوليتكنك الموصل/التخصصات الهندسية-قسم تقنيات الهندسة الميكانيكية",
        "total": 414.0,
        "minimum": 59.14,
        "preference": 171,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "كلية البوليتكنك بغداد",
        "department": "كلية البوليتكنك بغداد/التخصصات الهندسية-قسم هندسة التصنيع المبرمج",
        "total": 413.0,
        "minimum": 59.0,
        "preference": 161,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "كلية البوليتكنك القادسية",
        "department": "كلية البوليتكنك القادسية/التخصصات الهندسية-قسم تقنيات الهندسة الميكانيكية",
        "total": 413.0,
        "minimum": 59.0,
        "preference": 162,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية البوليتكنك كركوك",
        "department": "كلية البوليتكنك كركوك/التخصصات الهندسية-قسم تقنيات هندسة البناء والانشاءات",
        "total": 406.0,
        "minimum": 58.0,
        "preference": 176,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية البوليتكنك الحويجة",
        "department": "كلية البوليتكنك الحويجة/التخصصات الهندسية-قسم تقنيات هندسة الاجهزة الطبية",
        "total": 390.0,
        "minimum": 55.71,
        "preference": 165,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية البوليتكنك الحويجة",
        "department": "كلية البوليتكنك الحويجة/التخصصات الهندسية-قسم تقنيات الهندسة الكهربائية",
        "total": 369.0,
        "minimum": 52.71,
        "preference": 153,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية البوليتكنك الموصل",
        "department": "كلية البوليتكنك الموصل/التخصصات الهندسية-قسم تقنيات هندسة الاوتوترونكس",
        "total": 364.0,
        "minimum": 52.0,
        "preference": 151,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية البوليتكنك الموصل",
        "department": "كلية البوليتكنك الموصل/التخصصات الهندسية-قسم تقنيات هندسة البيئة والموارد المائية",
        "total": 359.0,
        "minimum": 51.29,
        "preference": 152,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الشطرة",
        "department": "الكلية التقنية الشطرة/الاقسام الزراعية-قسم تقنيات استصلاح الاراضي والري الحديث",
        "total": 418.0,
        "minimum": 59.71,
        "preference": 169,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الاقسام الزراعية",
        "department": "الكلية التقنية الاقسام الزراعية/المسيب",
        "total": 386.0,
        "minimum": 55.14,
        "preference": 151,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الزراعية",
        "department": "الكلية التقنية الزراعية/الموصل",
        "total": 385.0,
        "minimum": 55.0,
        "preference": 155,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الادارية",
        "department": "الكلية التقنية الادارية/البصرة",
        "total": 489.0,
        "minimum": 69.86,
        "preference": 120,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "الكلية التقنية الاقسام الادارية",
        "department": "الكلية التقنية الاقسام الادارية/ذي قار-قسم تقنيات المحاسبة",
        "total": 446.0,
        "minimum": 63.71,
        "preference": 126,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الادارية",
        "department": "الكلية التقنية الادارية/بغداد-الرصافة",
        "total": 434.0,
        "minimum": 62.0,
        "preference": 126,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية الكوت",
        "department": "الكلية التقنية الكوت/التخصصات الادارية-قسم تقنيات المحاسبة",
        "total": 433.0,
        "minimum": 61.86,
        "preference": 118,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الحويجة",
        "department": "الكلية التقنية الحويجة/التخصصات الادارية",
        "total": 422.0,
        "minimum": 60.29,
        "preference": 122,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "الكلية التقنية بعقوبة",
        "department": "الكلية التقنية بعقوبة/التخصصات الادارية-قسم تقنيات المحاسبة",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 113,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "الكلية التقنية الادارية",
        "department": "الكلية التقنية الادارية/الموصل",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "الكلية التقنية الادارية",
        "department": "الكلية التقنية الادارية/الكوفة",
        "total": 420.0,
        "minimum": 60.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "كلية البوليتكنك كركوك",
        "department": "كلية البوليتكنك كركوك/التخصصات الادارية-قسم تقنيات المحاسبة",
        "total": 418.0,
        "minimum": 59.71,
        "preference": 112,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "كلية البوليتكنك كربلاء",
        "department": "كلية البوليتكنك كربلاء/التخصصات الادارية",
        "total": 413.0,
        "minimum": 59.0,
        "preference": 114,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "كلية البوليتكنك بغداد",
        "department": "كلية البوليتكنك بغداد/التخصصات الادارية",
        "total": 387.0,
        "minimum": 55.29,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "كلية البوليتكنك القادسية",
        "department": "كلية البوليتكنك القادسية/التخصصات الادارية",
        "total": 383.0,
        "minimum": 54.71,
        "preference": 106,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/البصرة-قسم تقنيات التخدير",
        "total": 672.0,
        "minimum": 96.0,
        "preference": 297,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/البصرة-قسم تقنيات الصيدلة",
        "total": 667.0,
        "minimum": 95.29,
        "preference": 291,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/الموصل-قسم تقنيات التخدير",
        "total": 657.0,
        "minimum": 93.86,
        "preference": 282,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/البصرة-قسم تقنيات المختبرات الطبية",
        "total": 653.0,
        "minimum": 93.29,
        "preference": 277,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/الموصل-قسم تقنيات الصيدلة",
        "total": 651.0,
        "minimum": 93.0,
        "preference": 273,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/البصرة-قسم تقنيات التمريض",
        "total": 648.0,
        "minimum": 92.57,
        "preference": 264,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الناصرية",
        "department": "المعهد التقني الناصرية/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 644.0,
        "minimum": 92.0,
        "preference": 263,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الشطرة",
        "department": "المعهد التقني الشطرة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 638.0,
        "minimum": 91.14,
        "preference": 271,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/كركوك-قسم تقنيات الصيدلة",
        "total": 637.0,
        "minimum": 91.0,
        "preference": 261,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد الطبي",
        "department": "المعهد الطبي/بغداد باب المعظم",
        "total": 636.0,
        "minimum": 90.86,
        "preference": 280,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/البصرة-قسم تقنيات التمريض",
        "total": 632.0,
        "minimum": 90.29,
        "preference": 266,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/الموصل-قسم تقنيات التمريض",
        "total": 631.0,
        "minimum": 90.14,
        "preference": 247,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/البصرة-قسم تقنيات صحة المجتمع",
        "total": 631.0,
        "minimum": 90.14,
        "preference": 270,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/الموصل-قسم تقنيات الاشعة",
        "total": 631.0,
        "minimum": 90.14,
        "preference": 262,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الدور(صلاح الدين)",
        "department": "المعهد التقني الدور(صلاح الدين)/التخصصات الطبية-قسم تقنيات الصيدلة",
        "total": 628.0,
        "minimum": 89.71,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الناصرية",
        "department": "المعهد التقني الناصرية/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 628.0,
        "minimum": 89.71,
        "preference": 268,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد الطبي",
        "department": "المعهد الطبي/بغداد باب المعظم-قسم تقنيات التمريض",
        "total": 627.0,
        "minimum": 89.57,
        "preference": 260,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/الموصل-قسم تقنيات التمريض",
        "total": 625.0,
        "minimum": 89.29,
        "preference": 270,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني بعقوبة",
        "department": "المعهد التقني بعقوبة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 625.0,
        "minimum": 89.29,
        "preference": 254,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني الكوفة",
        "department": "المعهد التقني الكوفة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 625.0,
        "minimum": 89.29,
        "preference": 257,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني بابل",
        "department": "المعهد التقني بابل/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 622.0,
        "minimum": 88.86,
        "preference": 251,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/بغداد المنصور",
        "total": 621.0,
        "minimum": 88.71,
        "preference": 253,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني القادسية",
        "department": "المعهد التقني القادسية/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 620.96,
        "minimum": 88.71,
        "preference": 262,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الشطرة",
        "department": "المعهد التقني الشطرة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 618.0,
        "minimum": 88.29,
        "preference": 257,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني العمارة",
        "department": "المعهد التقني العمارة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 617.0,
        "minimum": 88.14,
        "preference": 260,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/كركوك-قسم تقنيات التمريض",
        "total": 616.0,
        "minimum": 88.0,
        "preference": 265,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الكوت",
        "department": "المعهد التقني الكوت/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 615.0,
        "minimum": 87.86,
        "preference": 251,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني المسيب",
        "department": "المعهد التقني المسيب/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 614.0,
        "minimum": 87.71,
        "preference": 256,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/كركوك-قسم تقنيات التمريض",
        "total": 614.0,
        "minimum": 87.71,
        "preference": 249,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد الطبي",
        "department": "المعهد الطبي/بغداد باب المعظم-قسم تقنيات التمريض",
        "total": 614.0,
        "minimum": 87.71,
        "preference": 266,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/الموصل-قسم تقنيات المختبرات الطبية",
        "total": 614.0,
        "minimum": 87.71,
        "preference": 254,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني السماوة",
        "department": "المعهد التقني السماوة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 613.0,
        "minimum": 87.57,
        "preference": 248,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/الموصل-قسم تقنيات فحص البصر",
        "total": 611.0,
        "minimum": 87.29,
        "preference": 262,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني العمارة",
        "department": "المعهد التقني العمارة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 610.0,
        "minimum": 87.14,
        "preference": 244,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد الطبي",
        "department": "المعهد الطبي/بغداد باب المعظم-قسم تقنيات وقاية الاسنان",
        "total": 609.0,
        "minimum": 87.0,
        "preference": 261,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني القادسية",
        "department": "المعهد التقني القادسية/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 606.0,
        "minimum": 86.57,
        "preference": 256,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني بعقوبة",
        "department": "المعهد التقني بعقوبة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 605.0,
        "minimum": 86.43,
        "preference": 240,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد الطبي",
        "department": "المعهد الطبي/بغداد باب المعظم-قسم تقنيات طب الطوارئ والاسعافات الاولية",
        "total": 605.0,
        "minimum": 86.43,
        "preference": 269,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الصويرة",
        "department": "المعهد التقني الصويرة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 604.0,
        "minimum": 86.29,
        "preference": 268,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني بابل",
        "department": "المعهد التقني بابل/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 604.0,
        "minimum": 86.29,
        "preference": 247,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/الموصل-قسم تقنيات طب الطوارئ والاسعاف الفوري",
        "total": 602.0,
        "minimum": 86.0,
        "preference": 261,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الانبار",
        "department": "المعهد التقني الانبار/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 602.0,
        "minimum": 86.0,
        "preference": 259,
        "branch": "علمي",
        "gender": "أنثى"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد الطبي",
        "department": "المعهد الطبي/بغداد باب المعظم-قسم تقنيات العلاج الطبيعي",
        "total": 601.0,
        "minimum": 85.86,
        "preference": 250,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/كركوك-قسم تقنيات صحة المجتمع",
        "total": 600.0,
        "minimum": 85.71,
        "preference": 237,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني الكوفة",
        "department": "المعهد التقني الكوفة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 600.0,
        "minimum": 85.71,
        "preference": 262,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الكوت",
        "department": "المعهد التقني الكوت/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 598.0,
        "minimum": 85.43,
        "preference": 272,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني السماوة",
        "department": "المعهد التقني السماوة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 598.0,
        "minimum": 85.43,
        "preference": 255,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني المسيب",
        "department": "المعهد التقني المسيب/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 598.0,
        "minimum": 85.43,
        "preference": 252,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني كربلاء",
        "department": "المعهد التقني كربلاء/التخصصات الطبية",
        "total": 596.0,
        "minimum": 85.14,
        "preference": 243,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني الكوفة",
        "department": "المعهد التقني الكوفة/التخصصات الطبية",
        "total": 595.0,
        "minimum": 85.0,
        "preference": 227,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني بلد",
        "department": "المعهد التقني بلد/التخصصات الطبية-قسم تقنيات الكلية الصناعية",
        "total": 593.0,
        "minimum": 84.71,
        "preference": 253,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/الموصل-قسم تقنيات صحة المجتمع",
        "total": 593.0,
        "minimum": 84.71,
        "preference": 246,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني العمارة",
        "department": "المعهد التقني العمارة/التخصصات الطبية",
        "total": 592.0,
        "minimum": 84.57,
        "preference": 230,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني بابل",
        "department": "المعهد التقني بابل/التخصصات الطبية",
        "total": 591.0,
        "minimum": 84.43,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الصويرة",
        "department": "المعهد التقني الصويرة/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 589.0,
        "minimum": 84.14,
        "preference": 236,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني بعقوبة",
        "department": "المعهد التقني بعقوبة/التخصصات الطبية-قسم تقنيات المختبرات الطبية",
        "total": 589.0,
        "minimum": 84.14,
        "preference": 223,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الانبار",
        "department": "المعهد التقني الانبار/التخصصات الطبية-قسم تقنيات التمريض",
        "total": 581.0,
        "minimum": 83.0,
        "preference": 259,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد الطبي",
        "department": "المعهد الطبي/بغداد باب المعظم-قسم تقنيات السمع والنطق",
        "total": 581.0,
        "minimum": 83.0,
        "preference": 239,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد الطبي",
        "department": "المعهد الطبي/بغداد باب المعظم-قسم تقنيات الاطراف والمساند",
        "total": 579.0,
        "minimum": 82.71,
        "preference": 229,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الدور(صلاح الدين)",
        "department": "المعهد التقني الدور(صلاح الدين)/التخصصات الطبية-قسم تقنيات المختبرات الطبية",
        "total": 578.0,
        "minimum": 82.57,
        "preference": 250,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الناصرية",
        "department": "المعهد التقني الناصرية/التخصصات الطبية",
        "total": 577.0,
        "minimum": 82.43,
        "preference": 235,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد الطبي",
        "department": "المعهد الطبي/بغداد باب المعظم-قسم تقنيات العلاج الوظيفي",
        "total": 577.0,
        "minimum": 82.43,
        "preference": 224,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/بغداد المنصور-قسم تقنيات المختبرات الطبية",
        "total": 575.64,
        "minimum": 82.23,
        "preference": 254,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد الطبي",
        "department": "المعهد الطبي/بغداد باب المعظم-قسم تقنيات التغذية الصحية",
        "total": 575.0,
        "minimum": 82.14,
        "preference": 262,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/بغداد المنصور-قسم تقنيات الادلة الجنائية والعدلية",
        "total": 573.0,
        "minimum": 81.86,
        "preference": 235,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني بعقوبة",
        "department": "المعهد التقني بعقوبة/التخصصات الطبية-قسم تقنيات صحة المجتمع",
        "total": 571.0,
        "minimum": 81.57,
        "preference": 236,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني المسيب",
        "department": "المعهد التقني المسيب/التخصصات الطبية",
        "total": 560.0,
        "minimum": 80.0,
        "preference": 248,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الحويجة",
        "department": "المعهد التقني الحويجة/التخصصات الطبية-قسم تقنيات المختبرات الطبية",
        "total": 552.0,
        "minimum": 78.86,
        "preference": 236,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الصويرة",
        "department": "المعهد التقني الصويرة/التخصصات الطبية-قسم تقنيات المختبرات الطبية",
        "total": 550.0,
        "minimum": 78.57,
        "preference": 220,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الدور(صلاح الدين)",
        "department": "المعهد التقني الدور(صلاح الدين)/التخصصات الطبية-قسم الاسعاف الفوري",
        "total": 546.0,
        "minimum": 78.0,
        "preference": 231,
        "branch": "علمي",
        "gender": "ذكر"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني بلد",
        "department": "المعهد التقني بلد/التخصصات الطبية-قسم تقنيات المختبرات الطبية",
        "total": 543.0,
        "minimum": 77.57,
        "preference": 237,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني السماوة",
        "department": "المعهد التقني السماوة/التخصصات الطبية",
        "total": 539.0,
        "minimum": 77.0,
        "preference": 218,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني النمرود",
        "department": "المعهد التقني النمرود/التخصصات الطبية-قسم تقنيات التغذية العلاجية",
        "total": 536.0,
        "minimum": 76.57,
        "preference": 221,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الحويجة",
        "department": "المعهد التقني الحويجة/التخصصات الطبية-قسم تقنيات فحص البصر",
        "total": 534.0,
        "minimum": 76.29,
        "preference": 220,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الانبار",
        "department": "المعهد التقني الانبار/التخصصات الطبية-قسم تقنيات صحة المجتمع",
        "total": 527.0,
        "minimum": 75.29,
        "preference": 212,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الحويجة",
        "department": "المعهد التقني الحويجة/التخصصات الطبية-قسم تقنيات الادلة الجنائية",
        "total": 526.0,
        "minimum": 75.14,
        "preference": 215,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الدور(صلاح الدين)",
        "department": "المعهد التقني الدور(صلاح الدين)/التخصصات الطبية-قسم الاطراف الصناعية",
        "total": 525.0,
        "minimum": 75.0,
        "preference": 220,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الكوت",
        "department": "المعهد التقني الكوت/التخصصات الطبية",
        "total": 517.0,
        "minimum": 73.86,
        "preference": 207,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الطبي",
        "department": "المعهد التقني الطبي/بغداد المنصور-قسم تقنيات الادارة الصحية",
        "total": 514.0,
        "minimum": 73.43,
        "preference": 213,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني القادسية",
        "department": "المعهد التقني القادسية/التخصصات الطبية",
        "total": 510.0,
        "minimum": 72.86,
        "preference": 219,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الشطرة",
        "department": "المعهد التقني الشطرة/التخصصات الطبية-قسم تقنيات الادارة الصحية",
        "total": 501.0,
        "minimum": 71.57,
        "preference": 210,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني الرميثة",
        "department": "المعهد التقني الرميثة/التخصصات الطبية",
        "total": 499.0,
        "minimum": 71.29,
        "preference": 195,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني النجف",
        "department": "المعهد التقني النجف/التخصصات الطبية",
        "total": 494.0,
        "minimum": 70.57,
        "preference": 184,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني التكنولوجي",
        "department": "المعهد التقني التكنولوجي/البصرة",
        "total": 462.0,
        "minimum": 66.0,
        "preference": 179,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني العمارة",
        "department": "المعهد التقني العمارة/التخصصات الهندسية",
        "total": 443.0,
        "minimum": 63.29,
        "preference": 155,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الناصرية",
        "department": "المعهد التقني الناصرية/التخصصات الهندسية",
        "total": 423.0,
        "minimum": 60.43,
        "preference": 160,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني الكوفة",
        "department": "المعهد التقني الكوفة/التخصصات الهندسية",
        "total": 418.0,
        "minimum": 59.71,
        "preference": 157,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "معهد التكنلوجيا",
        "department": "معهد التكنلوجيا/بغداد",
        "total": 408.0,
        "minimum": 58.29,
        "preference": 186,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني الرميثة",
        "department": "المعهد التقني الرميثة/التخصصات الهندسية",
        "total": 365.0,
        "minimum": 52.14,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني السماوة",
        "department": "المعهد التقني السماوة/التخصصات الهندسية",
        "total": 365.0,
        "minimum": 52.14,
        "preference": 162,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الكوت",
        "department": "المعهد التقني الكوت/التخصصات الهندسية",
        "total": 363.0,
        "minimum": 51.86,
        "preference": 161,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الحويجة",
        "department": "المعهد التقني الحويجة/التخصصات الهندسية",
        "total": 362.0,
        "minimum": 51.71,
        "preference": 152,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني بعقوبة",
        "department": "المعهد التقني بعقوبة/التخصصات الهندسية",
        "total": 361.0,
        "minimum": 51.57,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني بابل",
        "department": "المعهد التقني بابل/التخصصات الهندسية",
        "total": 357.0,
        "minimum": 51.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الدور(صلاح الدين)",
        "department": "المعهد التقني الدور(صلاح الدين)/التخصصات الهندسية",
        "total": 357.0,
        "minimum": 51.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني النجف",
        "department": "المعهد التقني النجف/التخصصات الهندسية",
        "total": 353.0,
        "minimum": 50.43,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني المسيب",
        "department": "المعهد التقني المسيب/التخصصات الهندسية",
        "total": 353.0,
        "minimum": 50.43,
        "preference": 153,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الصويرة",
        "department": "المعهد التقني الصويرة/التخصصات الهندسية",
        "total": 351.0,
        "minimum": 50.14,
        "preference": 151,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الموصل",
        "department": "المعهد التقني الموصل/التخصصات الهندسية",
        "total": 351.0,
        "minimum": 50.14,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الشطرة",
        "department": "المعهد التقني الشطرة/التخصصات الهندسية",
        "total": 350.0,
        "minimum": 50.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني كركوك",
        "department": "المعهد التقني كركوك/التخصصات الهندسية",
        "total": 350.0,
        "minimum": 50.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الانبار",
        "department": "المعهد التقني الانبار/التخصصات الهندسية",
        "total": 350.0,
        "minimum": 50.0,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الصويرة",
        "department": "المعهد التقني الصويرة/التخصصات الزراعية",
        "total": 376.0,
        "minimum": 53.71,
        "preference": 156,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني المسيب",
        "department": "المعهد التقني المسيب/التخصصات الزراعية",
        "total": 370.0,
        "minimum": 52.86,
        "preference": 154,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الحويجة",
        "department": "المعهد التقني الحويجة/التخصصات الزراعية-قسم تقنيات الانتاج النباتي",
        "total": 363.0,
        "minimum": 51.86,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الشطرة",
        "department": "المعهد التقني الشطرة/التخصصات الزراعية",
        "total": 359.0,
        "minimum": 51.29,
        "preference": 156,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني الكوفة",
        "department": "المعهد التقني الكوفة/التخصصات الزراعية",
        "total": 351.0,
        "minimum": 50.14,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الاداري",
        "department": "المعهد التقني الاداري/البصرة",
        "total": 461.0,
        "minimum": 65.86,
        "preference": 143,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني العمارة",
        "department": "المعهد التقني العمارة/التخصصات الادارية-قسم تقنيات المحاسبة",
        "total": 456.0,
        "minimum": 65.14,
        "preference": 135,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الناصرية",
        "department": "المعهد التقني الناصرية/التخصصات الادارية",
        "total": 439.0,
        "minimum": 62.71,
        "preference": 117,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الجنوبية",
        "college": "المعهد التقني الشطرة",
        "department": "المعهد التقني الشطرة/التخصصات الادارية-قسم تقنيات ادارة المواد",
        "total": 424.0,
        "minimum": 60.57,
        "preference": 107,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني الكوفة",
        "department": "المعهد التقني الكوفة/التخصصات الادارية",
        "total": 408.0,
        "minimum": 58.29,
        "preference": 106,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني النمرود",
        "department": "المعهد التقني النمرود/التخصصات الادارية-قسم تقنيات الادارة القانونية",
        "total": 400.0,
        "minimum": 57.14,
        "preference": 129,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني الرميثة",
        "department": "المعهد التقني الرميثة/التخصصات الادارية-قسم تقنيات المحاسبة",
        "total": 395.0,
        "minimum": 56.43,
        "preference": 123,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني بلد",
        "department": "المعهد التقني بلد/التخصصات الادارية-قسم تقنيات المحاسبة",
        "total": 382.0,
        "minimum": 54.57,
        "preference": 105,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني بابل",
        "department": "المعهد التقني بابل/التخصصات الادارية",
        "total": 373.0,
        "minimum": 53.29,
        "preference": 104,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الدور(صلاح الدين)",
        "department": "المعهد التقني الدور(صلاح الدين)/التخصصات الادارية",
        "total": 371.0,
        "minimum": 53.0,
        "preference": 102,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الكوت",
        "department": "المعهد التقني الكوت/التخصصات الادارية",
        "total": 371.0,
        "minimum": 53.0,
        "preference": 105,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الانبار",
        "department": "المعهد التقني الانبار/التخصصات الادارية",
        "total": 370.0,
        "minimum": 52.86,
        "preference": 102,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني السماوة",
        "department": "المعهد التقني السماوة/التخصصات الادارية",
        "total": 363.0,
        "minimum": 51.86,
        "preference": 104,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني بعقوبة",
        "department": "المعهد التقني بعقوبة/التخصصات الادارية",
        "total": 362.0,
        "minimum": 51.71,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني الحويجة",
        "department": "المعهد التقني الحويجة/التخصصات الادارية",
        "total": 359.0,
        "minimum": 51.29,
        "preference": 101,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "معهد الادارة التقني",
        "department": "معهد الادارة التقني/نينوى",
        "total": 354.0,
        "minimum": 50.57,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني المسيب",
        "department": "المعهد التقني المسيب/التخصصات الادارية",
        "total": 354.0,
        "minimum": 50.57,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "معهد الادارة التقني",
        "department": "معهد الادارة التقني/بغداد",
        "total": 353.0,
        "minimum": 50.43,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "المعهد التقني الصويرة",
        "department": "المعهد التقني الصويرة/التخصصات الادارية",
        "total": 353.0,
        "minimum": 50.43,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الشمالية",
        "college": "المعهد التقني كركوك",
        "department": "المعهد التقني كركوك/التخصصات الادارية",
        "total": 352.0,
        "minimum": 50.29,
        "preference": 102,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "معهد الادارة",
        "department": "معهد الادارة/الرصافة",
        "total": 350.0,
        "minimum": 50.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "جامعة الفرات الاوسط التقنية",
        "college": "المعهد التقني النجف",
        "department": "المعهد التقني النجف/التخصصات الادارية",
        "total": 350.0,
        "minimum": 50.0,
        "preference": 100,
        "branch": "علمي",
        "gender": "مختلط"
    },
    {
        "university": "الجامعة التقنية الوسطى",
        "college": "معهد اعداد المدربين التقنيين",
        "department": "معهد اعداد المدربين التقنيين/بغداد",
        "total": 354.0,
        "minimum": 50.57,
        "preference": 150,
        "branch": "علمي",
        "gender": "مختلط"
    }
];