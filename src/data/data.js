const quizData = {
  generalKnowledge: {
    id: "1",
    name: "General Knowledge",
    icon: "🌍",
    quizzes: {
      quiz1: [
        {
          id: 1,
          question: "What is the capital of France?",
          choices: ["Paris", "London", "Berlin", "Madrid"],
        },
        {
          id: 2,
          question: "Which continent is Australia in?",
          choices: ["Australia", "Europe", "Asia", "Africa"],
        },
        {
          id: 3,
          question: "How many days are there in a leap year?",
          choices: ["366", "365", "360", "364"],
        },
        {
          id: 4,
          question: "What color do you get by mixing red and white?",
          choices: ["Pink", "Purple", "Orange", "Brown"],
        },
        {
          id: 5,
          question: "Which ocean is the largest?",
          choices: [
            "Pacific Ocean",
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
          ],
        },
      ],
      quiz2: [
        {
          id: 6,
          question: "What is the national animal of Australia?",
          choices: ["Kangaroo", "Koala", "Emu", "Dingo"],
        },
        {
          id: 7,
          question: "Which language has the most native speakers?",
          choices: ["Mandarin", "English", "Spanish", "Arabic"],
        },
        {
          id: 8,
          question: "How many planets are in the solar system?",
          choices: ["8", "7", "9", "10"],
        },
        {
          id: 9,
          question: "What is H2O commonly known as?",
          choices: ["Water", "Hydrogen", "Oxygen", "Salt"],
        },
        {
          id: 10,
          question: "Which country invented paper?",
          choices: ["China", "Egypt", "Greece", "India"],
        },
      ],
    },
  },

  physics: {
    id: "2",
    icon: "🔬",
    name: "Physics",
    quizzes: {
      quiz1: [
        {
          id: 11,
          question: "What force pulls objects toward the Earth?",
          choices: ["Gravity", "Magnetism", "Friction", "Electric force"],
        },
        {
          id: 12,
          question: "What is the unit of force?",
          choices: ["Newton", "Joule", "Watt", "Pascal"],
        },
        {
          id: 13,
          question: "What is the speed of light?",
          choices: [
            "300,000 km/s",
            "150,000 km/s",
            "1,000 km/s",
            "30,000 km/s",
          ],
        },
        {
          id: 14,
          question: "Which particle has a negative charge?",
          choices: ["Electron", "Proton", "Neutron", "Photon"],
        },
        {
          id: 15,
          question: "What type of energy does a moving object have?",
          choices: [
            "Kinetic energy",
            "Potential energy",
            "Thermal energy",
            "Chemical energy",
          ],
        },
      ],
      quiz2: [
        {
          id: 16,
          question:
            "What law states that energy cannot be created or destroyed?",
          choices: [
            "Law of Conservation of Energy",
            "Newton’s First Law",
            "Ohm’s Law",
            "Hooke’s Law",
          ],
        },
        {
          id: 17,
          question: "What instrument measures electric current?",
          choices: ["Ammeter", "Voltmeter", "Thermometer", "Barometer"],
        },
        {
          id: 18,
          question: "Which wave does not need a medium?",
          choices: [
            "Electromagnetic wave",
            "Sound wave",
            "Water wave",
            "Seismic wave",
          ],
        },
        {
          id: 19,
          question: "What is the unit of electrical resistance?",
          choices: ["Ohm", "Ampere", "Volt", "Watt"],
        },
        {
          id: 20,
          question: "What phenomenon bends light when it passes through water?",
          choices: ["Refraction", "Reflection", "Diffraction", "Interference"],
        },
      ],
    },
  },

  mathematics: {
    id: "3",
    icon: "➗",
    name: "Mathematics",
    quizzes: {
      quiz1: [
        {
          id: 21,
          question: "What is 5 × 6?",
          choices: ["30", "25", "20", "35"],
        },
        {
          id: 22,
          question: "What is the square root of 81?",
          choices: ["9", "8", "7", "6"],
        },
        { id: 23, question: "What is 12 ÷ 3?", choices: ["4", "3", "6", "2"] },
        {
          id: 24,
          question: "What is 10²?",
          choices: ["100", "20", "10", "1000"],
        },
        {
          id: 25,
          question: "What is the value of π (approx)?",
          choices: ["3.14", "2.14", "1.14", "4.14"],
        },
      ],
      quiz2: [
        {
          id: 26,
          question: "What is 15 + 25?",
          choices: ["40", "35", "45", "50"],
        },
        {
          id: 27,
          question: "What is 9 × 9?",
          choices: ["81", "72", "90", "99"],
        },
        {
          id: 28,
          question: "What is 100 ÷ 10?",
          choices: ["10", "20", "5", "15"],
        },
        {
          id: 29,
          question: "What is the perimeter of a square with side 4?",
          choices: ["16", "12", "8", "20"],
        },
        {
          id: 30,
          question: "What is 7³?",
          choices: ["343", "49", "21", "512"],
        },
      ],
    },
  },
};

export default quizData;
