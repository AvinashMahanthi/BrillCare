let a = ["Chief Complaint",
    "History of presenting illness",
    "Medical History",
    "Surgical History",
    "Dental History",
    "Personal History",
    "Diet",
    "Personal Habits",
    "Family History",
    "Marital History",
    "Stature",
    "Appearance",
    "Built",
    "Nourishment",
    "Structural Alterations, Deformities",
    "Hair",
    "Skin",
    "Pallor",
    "Icterus",
    "Pedal Edema",
    "Cyanosis",
    "B.P.",
    "Respiratory rate",
    "Pulse rate",
    "Temperature",
    "CVS",
    "RS",
    "GIT",
    "CND",
    "Urogenital System",
    "Facial symmetry",
    "Ear, Nose, Eye",
    "TMJ",
    "Lips",
    "Maxillary sinus tenderness",
    "Lymph Nodes",
    "Intra Oral Examination",
    "Opening of the mouth",
    "Interincisal distance",
    "Jaw Deviation",
    "TeethNumber",
    "TeethSize",
    "TeethShape",
    "TeethColour",
    "TeethMissing Tooth",
    "TeethRestored Tooth",
    "TeethStains",
    "TeethCaries",
    "TeethAttrition",
    "TeethAbrasion",
    "TeethErosion",
    "TeethMobility",
    "TeethRoot stumps",
    "TeethFracture",
    "TeethRetained deciduous",
    "TeethPartially erupted",
    "TeethDevelopmental Anomalies",
    "GingivaColour",
    "GingivaContour",
    "GingivaConsistency",
    "GingivaCalculus",
    "Gingival recession",
    "GingivaPeriodontal Pocket",
    "Alveolar Mucosa",
    "Buccal MucosaColour",
    "Buccal MucosaConsistency",
    "Buccal MucosaOpening of Stenson’s duct",
    "Labial Mucosa",
    "PalateHard Palate",
    "PalateSoft Palate",
    "TongueSize",
    "TongueMovement",
    "TongueAttachment",
    "TongueDorsal Surface",
    "TongueVentral Surface",
    "TongueEdge",
    "TongueLateral Surface",
    "Tonsils",
    "Floor of the mouth",
    "Pillars of the fauces",
    "Inspection",
    "Palpation",
    "Summary",
    "Provisional Diagonosis",
    "Investigations",
    "Final Diagonosis",
    "Treatment Plan",
    "Referal to Departments"]
let b = [
    "chiefComplaint",
    "historyOfPresentingIllness",
    "medicalHistory",
    "surgicalHistory",
    "dentalHistory",
    "personalHistory",
    "diet",
    "personalHabits",
    "familyHistory",
    "maritalHistory",
    "stature",
    "appearance",
    "built",
    "nourishment",
    "structuralAlterationsDeformities",
    "hair",
    "skin",
    "pallor",
    "icterus",
    "pedalEdema",
    "cyanosis",
    "bP",
    "respiratoryRate",
    "pulseRate",
    "temperature",
    "cvs",
    "rs",
    "git",
    "cnd",
    "urogenitalSystem",
    "facialSymmetry",
    "earNoseEye",
    "tmj",
    "lips",
    "maxillarySinusTenderness",
    "lymphNodes",
    "intraOralExamination",
    "openingOfTheMouth",
    "interincisalDistance",
    "jawDeviation",
    "teethNumber",
    "teethSize",
    "teethShape",
    "teethColour",
    "teethMissingTooth",
    "teethRestoredTooth",
    "teethStains",
    "teethCaries",
    "teethAttrition",
    "teethAbrasion",
    "teethErosion",
    "teethMobility",
    "teethRootStumps",
    "teethFracture",
    "teethRetainedDeciduous",
    "teethPartiallyErupted",
    "teethDevelopmentalAnomalies",
    "gingivaColour",
    "gingivaContour",
    "gingivaConsistency",
    "gingivaCalculus",
    "gingivalRecession",
    "gingivaPeriodontalPocket",
    "alveolarMucosa",
    "buccalMucosaColour",
    "buccalMucosaConsistency",
    "buccalMucosaOpeningOfStensonSDuct",
    "labialMucosa",
    "palateHardPalate",
    "palateSoftPalate",
    "tongueSize",
    "tongueMovement",
    "tongueAttachment",
    "tongueDorsalSurface",
    "tongueVentralSurface",
    "tongueEdge",
    "tongueLateralSurface",
    "tonsils",
    "floorOfTheMouth",
    "pillarsOfTheFauces",
    "inspection",
    "palpation",
    "summary",
    "provisionalDiagonosis",
    "investigations",
    "finalDiagonosis",
    "treatmentPlan",
    "referalToDepartments",
]
for (let index = 0; index < a.length; index++) {
    console.log(`<InputControl mt={3} name="${b[index]}" label="${a[index]}" />`);
}