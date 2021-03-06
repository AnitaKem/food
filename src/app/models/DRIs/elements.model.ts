// Dietary Reference Intakes (DRIs): Recommended Dietary Allowances and Adequate Intakes,
// ElementsFood and Nutrition Board, National Academies
// Elements

import { FoodElement } from './food-element.model';
import { Measure } from '../measure.model';

export const elements: { [key: string]: FoodElement } = {
  calcium: {
    name: 'Calcium',
    measure: Measure.Mg,
    lifestyleGroup: {
      children: {
        interval: {
          ['1-3 y']: 700,
          ['4-8 y']: 1000,
        },
        year: {
          // 1-3 y
          1: 700,
          2: 700,
          3: 700,
          // 4-8 y
          4: 1000,
          5: 1000,
          6: 1000,
          7: 1000,
          8: 1000,
        }
      },
      males: {
        interval: {
          ['9–13 y']: 1300,
          ['14–18 y']: 1300,
          ['19–30 y']: 1000,
          ['31–50 y']: 1000,
          ['51–70 y']: 1000,
          ['> 70 y']: 1200,
        },
        year: {
          // 9–13 y
          9: 1300,
          10: 1300,
          11: 1300,
          12: 1300,
          13: 1300,
          // 14–18 y
          14: 1300,
          15: 1300,
          16: 1300,
          17: 1300,
          18: 1300,
          // 19–30 y
          19: 1000,
          20: 1000,
          21: 1000,
          22: 1000,
          23: 1000,
          24: 1000,
          25: 1000,
          26: 1000,
          27: 1000,
          28: 1000,
          29: 1000,
          30: 1000,
          // 31–50 y
          31: 1000,
          32: 1000,
          33: 1000,
          34: 1000,
          35: 1000,
          36: 1000,
          37: 1000,
          38: 1000,
          39: 1000,
          40: 1000,
          41: 1000,
          42: 1000,
          43: 1000,
          44: 1000,
          45: 1000,
          46: 1000,
          47: 1000,
          48: 1000,
          49: 1000,
          50: 1000,
          // 51–70 y
          51: 1000,
          52: 1000,
          53: 1000,
          54: 1000,
          55: 1000,
          56: 1000,
          57: 1000,
          58: 1000,
          59: 1000,
          60: 1000,
          61: 1000,
          62: 1000,
          63: 1000,
          64: 1000,
          65: 1000,
          66: 1000,
          67: 1000,
          68: 1000,
          69: 1000,
          70: 1000,
          // > 70 y
          71: 1200,
        }
      },
      females: {
        interval: {
          ['9–13 y']: 1300,
          ['14–18 y']: 1300,
          ['19–30 y']: 1000,
          ['31–50 y']: 1000,
          ['51–70 y']: 1200,
          ['> 70 y']: 1200,
        },
        year: {
          // 9–13 y
          9: 1300,
          10: 1300,
          11: 1300,
          12: 1300,
          13: 1300,
          // 14–18 y
          14: 1300,
          15: 1300,
          16: 1300,
          17: 1300,
          18: 1300,
          // 19–30 y
          19: 1000,
          20: 1000,
          21: 1000,
          22: 1000,
          23: 1000,
          24: 1000,
          25: 1000,
          26: 1000,
          27: 1000,
          28: 1000,
          29: 1000,
          30: 1000,
          // 31–50 y
          31: 1000,
          32: 1000,
          33: 1000,
          34: 1000,
          35: 1000,
          36: 1000,
          37: 1000,
          38: 1000,
          39: 1000,
          40: 1000,
          41: 1000,
          42: 1000,
          43: 1000,
          44: 1000,
          45: 1000,
          46: 1000,
          47: 1000,
          48: 1000,
          49: 1000,
          50: 1000,
          // 51–70 y
          51: 1200,
          52: 1200,
          53: 1200,
          54: 1200,
          55: 1200,
          56: 1200,
          57: 1200,
          58: 1200,
          59: 1200,
          60: 1200,
          61: 1200,
          62: 1200,
          63: 1200,
          64: 1200,
          65: 1200,
          66: 1200,
          67: 1200,
          68: 1200,
          69: 1200,
          70: 1200,
          // > 70 y
          71: 1200,
        }
      },
    }
  },
  copper: {
    name: 'Copper',
    measure: Measure.Mcg,
    lifestyleGroup: {
      children: {
        interval: {
          ['1-3 y']: 340,
          ['4-8 y']: 440,
        },
        year: {
          // 1-3 y
          1: 340,
          2: 340,
          3: 340,
          // 4-8 y
          4: 440,
          5: 440,
          6: 440,
          7: 440,
          8: 440,
        }
      },
      males: {
        interval: {
          ['9–13 y']: 700,
          ['14–18 y']: 890,
          ['19–30 y']: 900,
          ['31–50 y']: 900,
          ['51–70 y']: 900,
          ['> 70 y']: 900,
        },
        year: {
          // 9–13 y
          9: 700,
          10: 700,
          11: 700,
          12: 700,
          13: 700,
          // 14–18 y
          14: 890,
          15: 890,
          16: 890,
          17: 890,
          18: 890,
          // 19–30 y
          19: 900,
          20: 900,
          21: 900,
          22: 900,
          23: 900,
          24: 900,
          25: 900,
          26: 900,
          27: 900,
          28: 900,
          29: 900,
          30: 900,
          // 31–50 y
          31: 900,
          32: 900,
          33: 900,
          34: 900,
          35: 900,
          36: 900,
          37: 900,
          38: 900,
          39: 900,
          40: 900,
          41: 900,
          42: 900,
          43: 900,
          44: 900,
          45: 900,
          46: 900,
          47: 900,
          48: 900,
          49: 900,
          50: 900,
          // 51–70 y
          51: 900,
          52: 900,
          53: 900,
          54: 900,
          55: 900,
          56: 900,
          57: 900,
          58: 900,
          59: 900,
          60: 900,
          61: 900,
          62: 900,
          63: 900,
          64: 900,
          65: 900,
          66: 900,
          67: 900,
          68: 900,
          69: 900,
          70: 900,
          // > 70 y
          71: 900,
        }
      },
      females: {
        interval: {
          ['9–13 y']: 700,
          ['14–18 y']: 890,
          ['19–30 y']: 900,
          ['31–50 y']: 900,
          ['51–70 y']: 900,
          ['> 70 y']: 900,
        },
        year: {
          // 9–13 y
          9: 700,
          10: 700,
          11: 700,
          12: 700,
          13: 700,
          // 14–18 y
          14: 890,
          15: 890,
          16: 890,
          17: 890,
          18: 890,
          // 19–30 y
          19: 900,
          20: 900,
          21: 900,
          22: 900,
          23: 900,
          24: 900,
          25: 900,
          26: 900,
          27: 900,
          28: 900,
          29: 900,
          30: 900,
          // 31–50 y
          31: 900,
          32: 900,
          33: 900,
          34: 900,
          35: 900,
          36: 900,
          37: 900,
          38: 900,
          39: 900,
          40: 900,
          41: 900,
          42: 900,
          43: 900,
          44: 900,
          45: 900,
          46: 900,
          47: 900,
          48: 900,
          49: 900,
          50: 900,
          // 51–70 y
          51: 900,
          52: 900,
          53: 900,
          54: 900,
          55: 900,
          56: 900,
          57: 900,
          58: 900,
          59: 900,
          60: 900,
          61: 900,
          62: 900,
          63: 900,
          64: 900,
          65: 900,
          66: 900,
          67: 900,
          68: 900,
          69: 900,
          70: 900,
          // > 70 y
          71: 900,
        }
      },
    }
  },
  iodine: {
    name: 'Iodine',
    measure: Measure.Mg,
    lifestyleGroup: {
      children: {
        interval: {
          ['1-3 y']: 90,
          ['4-8 y']: 90,
        },
        year: {
          // 1-3 y
          1: 90,
          2: 90,
          3: 90,
          // 4-8 y
          4: 90,
          5: 90,
          6: 90,
          7: 90,
          8: 90,
        }
      },
      males: {
        interval: {
          ['9–13 y']: 120,
          ['14–18 y']: 150,
          ['19–30 y']: 150,
          ['31–50 y']: 150,
          ['51–70 y']: 150,
          ['> 70 y']: 150,
        },
        year: {
          // 9–13 y
          9: 120,
          10: 120,
          11: 120,
          12: 120,
          13: 120,
          // 14–18 y
          14: 150,
          15: 150,
          16: 150,
          17: 150,
          18: 150,
          // 19–30 y
          19: 150,
          20: 150,
          21: 150,
          22: 150,
          23: 150,
          24: 150,
          25: 150,
          26: 150,
          27: 150,
          28: 150,
          29: 150,
          30: 150,
          // 31–50 y
          31: 150,
          32: 150,
          33: 150,
          34: 150,
          35: 150,
          36: 150,
          37: 150,
          38: 150,
          39: 150,
          40: 150,
          41: 150,
          42: 150,
          43: 150,
          44: 150,
          45: 150,
          46: 150,
          47: 150,
          48: 150,
          49: 150,
          50: 150,
          // 51–70 y
          51: 150,
          52: 150,
          53: 150,
          54: 150,
          55: 150,
          56: 150,
          57: 150,
          58: 150,
          59: 150,
          60: 150,
          61: 150,
          62: 150,
          63: 150,
          64: 150,
          65: 150,
          66: 150,
          67: 150,
          68: 150,
          69: 150,
          70: 150,
          // > 70 y
          71: 150,
        }
      },
      females: {
        interval: {
          ['9–13 y']: 120,
          ['14–18 y']: 150,
          ['19–30 y']: 150,
          ['31–50 y']: 150,
          ['51–70 y']: 150,
          ['> 70 y']: 150,
        },
        year: {
          // 9–13 y
          9: 120,
          10: 120,
          11: 120,
          12: 120,
          13: 120,
          // 14–18 y
          14: 150,
          15: 150,
          16: 150,
          17: 150,
          18: 150,
          // 19–30 y
          19: 150,
          20: 150,
          21: 150,
          22: 150,
          23: 150,
          24: 150,
          25: 150,
          26: 150,
          27: 150,
          28: 150,
          29: 150,
          30: 150,
          // 31–50 y
          31: 150,
          32: 150,
          33: 150,
          34: 150,
          35: 150,
          36: 150,
          37: 150,
          38: 150,
          39: 150,
          40: 150,
          41: 150,
          42: 150,
          43: 150,
          44: 150,
          45: 150,
          46: 150,
          47: 150,
          48: 150,
          49: 150,
          50: 150,
          // 51–70 y
          51: 150,
          52: 150,
          53: 150,
          54: 150,
          55: 150,
          56: 150,
          57: 150,
          58: 150,
          59: 150,
          60: 150,
          61: 150,
          62: 150,
          63: 150,
          64: 150,
          65: 150,
          66: 150,
          67: 150,
          68: 150,
          69: 150,
          70: 150,
          // > 70 y
          71: 150,
        }
      },
    }
  },
  iron: {
    name: 'Iron',
    measure: Measure.Mcg,
    lifestyleGroup: {
      children: {
        interval: {
          ['1-3 y']: 7,
          ['4-8 y']: 10,
        },
        year: {
          // 1-3 y
          1: 7,
          2: 7,
          3: 7,
          // 4-8 y
          4: 10,
          5: 10,
          6: 10,
          7: 10,
          8: 10,
        }
      },
      males: {
        interval: {
          ['9–13 y']: 8,
          ['14–18 y']: 11,
          ['19–30 y']: 8,
          ['31–50 y']: 8,
          ['51–70 y']: 8,
          ['> 70 y']: 8,
        },
        year: {
          // 9–13 y
          9: 8,
          10: 8,
          11: 8,
          12: 8,
          13: 8,
          // 14–18 y
          14: 11,
          15: 11,
          16: 11,
          17: 11,
          18: 11,
          // 19–30 y
          19: 8,
          20: 8,
          21: 8,
          22: 8,
          23: 8,
          24: 8,
          25: 8,
          26: 8,
          27: 8,
          28: 8,
          29: 8,
          30: 8,
          // 31–50 y
          31: 8,
          32: 8,
          33: 8,
          34: 8,
          35: 8,
          36: 8,
          37: 8,
          38: 8,
          39: 8,
          40: 8,
          41: 8,
          42: 8,
          43: 8,
          44: 8,
          45: 8,
          46: 8,
          47: 8,
          48: 8,
          49: 8,
          50: 8,
          // 51–70 y
          51: 8,
          52: 8,
          53: 8,
          54: 8,
          55: 8,
          56: 8,
          57: 8,
          58: 8,
          59: 8,
          60: 8,
          61: 8,
          62: 8,
          63: 8,
          64: 8,
          65: 8,
          66: 8,
          67: 8,
          68: 8,
          69: 8,
          70: 8,
          // > 70 y
          71: 8,
        }
      },
      females: {
        interval: {
          ['9–13 y']: 8,
          ['14–18 y']: 15,
          ['19–30 y']: 18,
          ['31–50 y']: 18,
          ['51–70 y']: 8,
          ['> 70 y']: 8,
        },
        year: {
          // 9–13 y
          9: 8,
          10: 8,
          11: 8,
          12: 8,
          13: 8,
          // 14–18 y
          14: 15,
          15: 15,
          16: 15,
          17: 15,
          18: 15,
          // 19–30 y
          19: 18,
          20: 18,
          21: 18,
          22: 18,
          23: 18,
          24: 18,
          25: 18,
          26: 18,
          27: 18,
          28: 18,
          29: 18,
          30: 18,
          // 31–50 y
          31: 18,
          32: 18,
          33: 18,
          34: 18,
          35: 18,
          36: 18,
          37: 18,
          38: 18,
          39: 18,
          40: 18,
          41: 18,
          42: 18,
          43: 18,
          44: 18,
          45: 18,
          46: 18,
          47: 18,
          48: 18,
          49: 18,
          50: 18,
          // 51–70 y
          51: 8,
          52: 8,
          53: 8,
          54: 8,
          55: 8,
          56: 8,
          57: 8,
          58: 8,
          59: 8,
          60: 8,
          61: 8,
          62: 8,
          63: 8,
          64: 8,
          65: 8,
          66: 8,
          67: 8,
          68: 8,
          69: 8,
          70: 8,
          // > 70 y
          71: 8,
        }
      },
    }
  },
  magnesium: {
    name: 'Magnesium',
    measure: Measure.Mg,
    lifestyleGroup: {
      children: {
        interval: {
          ['1-3 y']: 80,
          ['4-8 y']: 130,
        },
        year: {
          // 1-3 y
          1: 80,
          2: 80,
          3: 80,
          // 4-8 y
          4: 130,
          5: 130,
          6: 130,
          7: 130,
          8: 130,
        }
      },
      males: {
        interval: {
          ['9–13 y']: 240,
          ['14–18 y']: 410,
          ['19–30 y']: 400,
          ['31–50 y']: 420,
          ['51–70 y']: 420,
          ['> 70 y']: 420,
        },
        year: {
          // 9–13 y
          9: 240,
          10: 240,
          11: 240,
          12: 240,
          13: 240,
          // 14–18 y
          14: 410,
          15: 410,
          16: 410,
          17: 410,
          18: 410,
          // 19–30 y
          19: 400,
          20: 400,
          21: 400,
          22: 400,
          23: 400,
          24: 400,
          25: 400,
          26: 400,
          27: 400,
          28: 400,
          29: 400,
          30: 400,
          // 31–50 y
          31: 420,
          32: 420,
          33: 420,
          34: 420,
          35: 420,
          36: 420,
          37: 420,
          38: 420,
          39: 420,
          40: 420,
          41: 420,
          42: 420,
          43: 420,
          44: 420,
          45: 420,
          46: 420,
          47: 420,
          48: 420,
          49: 420,
          50: 420,
          // 51–70 y
          51: 420,
          52: 420,
          53: 420,
          54: 420,
          55: 420,
          56: 420,
          57: 420,
          58: 420,
          59: 420,
          60: 420,
          61: 420,
          62: 420,
          63: 420,
          64: 420,
          65: 420,
          66: 420,
          67: 420,
          68: 420,
          69: 420,
          70: 420,
          // > 70 y
          71: 420,
        }
      },
      females: {
        interval: {
          ['9–13 y']: 240,
          ['14–18 y']: 360,
          ['19–30 y']: 310,
          ['31–50 y']: 320,
          ['51–70 y']: 320,
          ['> 70 y']: 320,
        },
        year: {
          // 9–13 y
          9: 240,
          10: 240,
          11: 240,
          12: 240,
          13: 240,
          // 14–18 y
          14: 360,
          15: 360,
          16: 360,
          17: 360,
          18: 360,
          // 19–30 y
          19: 310,
          20: 310,
          21: 310,
          22: 310,
          23: 310,
          24: 310,
          25: 310,
          26: 310,
          27: 310,
          28: 310,
          29: 310,
          30: 310,
          // 31–50 y
          31: 320,
          32: 320,
          33: 320,
          34: 320,
          35: 320,
          36: 320,
          37: 320,
          38: 320,
          39: 320,
          40: 320,
          41: 320,
          42: 320,
          43: 320,
          44: 320,
          45: 320,
          46: 320,
          47: 320,
          48: 320,
          49: 320,
          50: 320,
          // 51–70 y
          51: 320,
          52: 320,
          53: 320,
          54: 320,
          55: 320,
          56: 320,
          57: 320,
          58: 320,
          59: 320,
          60: 320,
          61: 320,
          62: 320,
          63: 320,
          64: 320,
          65: 320,
          66: 320,
          67: 320,
          68: 320,
          69: 320,
          70: 320,
          // > 70 y
          71: 320,
        }
      },
    }
  },
  molybdenum : {
    name: 'Molybdenum',
    measure: Measure.Mcg,
    lifestyleGroup: {
      children: {
        interval: {
          ['1-3 y']: 17,
          ['4-8 y']: 22,
        },
        year: {
          // 1-3 y
          1: 17,
          2: 17,
          3: 17,
          // 4-8 y
          4: 22,
          5: 22,
          6: 22,
          7: 22,
          8: 22,
        }
      },
      males: {
        interval: {
          ['9–13 y']: 34,
          ['14–18 y']: 43,
          ['19–30 y']: 45,
          ['31–50 y']: 45,
          ['51–70 y']: 45,
          ['> 70 y']: 45,
        },
        year: {
          // 9–13 y
          9: 34,
          10: 34,
          11: 34,
          12: 34,
          13: 34,
          // 14–18 y
          14: 43,
          15: 43,
          16: 43,
          17: 43,
          18: 43,
          // 19–30 y
          19: 45,
          20: 45,
          21: 45,
          22: 45,
          23: 45,
          24: 45,
          25: 45,
          26: 45,
          27: 45,
          28: 45,
          29: 45,
          30: 45,
          // 31–50 y
          31: 45,
          32: 45,
          33: 45,
          34: 45,
          35: 45,
          36: 45,
          37: 45,
          38: 45,
          39: 45,
          40: 45,
          41: 45,
          42: 45,
          43: 45,
          44: 45,
          45: 45,
          46: 45,
          47: 45,
          48: 45,
          49: 45,
          50: 45,
          // 51–70 y
          51: 45,
          52: 45,
          53: 45,
          54: 45,
          55: 45,
          56: 45,
          57: 45,
          58: 45,
          59: 45,
          60: 45,
          61: 45,
          62: 45,
          63: 45,
          64: 45,
          65: 45,
          66: 45,
          67: 45,
          68: 45,
          69: 45,
          70: 45,
          // > 70 y
          71: 45,
        }
      },
      females: {
        interval: {
          ['9–13 y']: 34,
          ['14–18 y']: 43,
          ['19–30 y']: 45,
          ['31–50 y']: 45,
          ['51–70 y']: 45,
          ['> 70 y']: 45,
        },
        year: {
          // 9–13 y
          9: 34,
          10: 34,
          11: 34,
          12: 34,
          13: 34,
          // 14–18 y
          14: 43,
          15: 43,
          16: 43,
          17: 43,
          18: 43,
          // 19–30 y
          19: 45,
          20: 45,
          21: 45,
          22: 45,
          23: 45,
          24: 45,
          25: 45,
          26: 45,
          27: 45,
          28: 45,
          29: 45,
          30: 45,
          // 31–50 y
          31: 45,
          32: 45,
          33: 45,
          34: 45,
          35: 45,
          36: 45,
          37: 45,
          38: 45,
          39: 45,
          40: 45,
          41: 45,
          42: 45,
          43: 45,
          44: 45,
          45: 45,
          46: 45,
          47: 45,
          48: 45,
          49: 45,
          50: 45,
          // 51–70 y
          51: 45,
          52: 45,
          53: 45,
          54: 45,
          55: 45,
          56: 45,
          57: 45,
          58: 45,
          59: 45,
          60: 45,
          61: 45,
          62: 45,
          63: 45,
          64: 45,
          65: 45,
          66: 45,
          67: 45,
          68: 45,
          69: 45,
          70: 45,
          // > 70 y
          71: 45,
        }
      },
    }
  },
  phosphorus : {
    name: 'Phosphorus',
    measure: Measure.Mg,
    lifestyleGroup: {
      children: {
        interval: {
          ['1-3 y']: 460,
          ['4-8 y']: 500,
        },
        year: {
          // 1-3 y
          1: 460,
          2: 460,
          3: 460,
          // 4-8 y
          4: 500,
          5: 500,
          6: 500,
          7: 500,
          8: 500,
        }
      },
      males: {
        interval: {
          ['9–13 y']: 1250,
          ['14–18 y']: 1250,
          ['19–30 y']: 700,
          ['31–50 y']: 700,
          ['51–70 y']: 700,
          ['> 70 y']: 700,
        },
        year: {
          // 9–13 y
          9: 1250,
          10: 1250,
          11: 1250,
          12: 1250,
          13: 1250,
          // 14–18 y
          14: 1250,
          15: 1250,
          16: 1250,
          17: 1250,
          18: 1250,
          // 19–30 y
          19: 700,
          20: 700,
          21: 700,
          22: 700,
          23: 700,
          24: 700,
          25: 700,
          26: 700,
          27: 700,
          28: 700,
          29: 700,
          30: 700,
          // 31–50 y
          31: 700,
          32: 700,
          33: 700,
          34: 700,
          35: 700,
          36: 700,
          37: 700,
          38: 700,
          39: 700,
          40: 700,
          41: 700,
          42: 700,
          43: 700,
          44: 700,
          45: 700,
          46: 700,
          47: 700,
          48: 700,
          49: 700,
          50: 700,
          // 51–70 y
          51: 700,
          52: 700,
          53: 700,
          54: 700,
          55: 700,
          56: 700,
          57: 700,
          58: 700,
          59: 700,
          60: 700,
          61: 700,
          62: 700,
          63: 700,
          64: 700,
          65: 700,
          66: 700,
          67: 700,
          68: 700,
          69: 700,
          70: 700,
          // > 70 y
          71: 700,
        }
      },
      females: {
        interval: {
          ['9–13 y']: 1250,
          ['14–18 y']: 1250,
          ['19–30 y']: 700,
          ['31–50 y']: 700,
          ['51–70 y']: 700,
          ['> 70 y']: 700,
        },
        year: {
          // 9–13 y
          9: 1250,
          10: 1250,
          11: 1250,
          12: 1250,
          13: 1250,
          // 14–18 y
          14: 1250,
          15: 1250,
          16: 1250,
          17: 1250,
          18: 1250,
          // 19–30 y
          19: 700,
          20: 700,
          21: 700,
          22: 700,
          23: 700,
          24: 700,
          25: 700,
          26: 700,
          27: 700,
          28: 700,
          29: 700,
          30: 700,
          // 31–50 y
          31: 700,
          32: 700,
          33: 700,
          34: 700,
          35: 700,
          36: 700,
          37: 700,
          38: 700,
          39: 700,
          40: 700,
          41: 700,
          42: 700,
          43: 700,
          44: 700,
          45: 700,
          46: 700,
          47: 700,
          48: 700,
          49: 700,
          50: 700,
          // 51–70 y
          51: 700,
          52: 700,
          53: 700,
          54: 700,
          55: 700,
          56: 700,
          57: 700,
          58: 700,
          59: 700,
          60: 700,
          61: 700,
          62: 700,
          63: 700,
          64: 700,
          65: 700,
          66: 700,
          67: 700,
          68: 700,
          69: 700,
          70: 700,
          // > 70 y
          71: 700,
        }
      },
    }
  },
  selenium : {
    name: 'Selenium',
    measure: Measure.Mcg,
    lifestyleGroup: {
      children: {
        interval: {
          ['1-3 y']: 20,
          ['4-8 y']: 30,
        },
        year: {
          // 1-3 y
          1: 20,
          2: 20,
          3: 20,
          // 4-8 y
          4: 30,
          5: 30,
          6: 30,
          7: 30,
          8: 30,
        }
      },
      males: {
        interval: {
          ['9–13 y']: 40,
          ['14–18 y']: 55,
          ['19–30 y']: 55,
          ['31–50 y']: 55,
          ['51–70 y']: 55,
          ['> 70 y']: 55,
        },
        year: {
          // 9–13 y
          9: 40,
          10: 40,
          11: 40,
          12: 40,
          13: 40,
          // 14–18 y
          14: 55,
          15: 55,
          16: 55,
          17: 55,
          18: 55,
          // 19–30 y
          19: 55,
          20: 55,
          21: 55,
          22: 55,
          23: 55,
          24: 55,
          25: 55,
          26: 55,
          27: 55,
          28: 55,
          29: 55,
          30: 55,
          // 31–50 y
          31: 55,
          32: 55,
          33: 55,
          34: 55,
          35: 55,
          36: 55,
          37: 55,
          38: 55,
          39: 55,
          40: 55,
          41: 55,
          42: 55,
          43: 55,
          44: 55,
          45: 55,
          46: 55,
          47: 55,
          48: 55,
          49: 55,
          50: 55,
          // 51–70 y
          51: 55,
          52: 55,
          53: 55,
          54: 55,
          55: 55,
          56: 55,
          57: 55,
          58: 55,
          59: 55,
          60: 55,
          61: 55,
          62: 55,
          63: 55,
          64: 55,
          65: 55,
          66: 55,
          67: 55,
          68: 55,
          69: 55,
          70: 55,
          // > 70 y
          71: 55,
        }
      },
      females: {
        interval: {
          ['9–13 y']: 40,
          ['14–18 y']: 55,
          ['19–30 y']: 55,
          ['31–50 y']: 55,
          ['51–70 y']: 55,
          ['> 70 y']: 55,
        },
        year: {
          // 9–13 y
          9: 40,
          10: 40,
          11: 40,
          12: 40,
          13: 40,
          // 14–18 y
          14: 55,
          15: 55,
          16: 55,
          17: 55,
          18: 55,
          // 19–30 y
          19: 55,
          20: 55,
          21: 55,
          22: 55,
          23: 55,
          24: 55,
          25: 55,
          26: 55,
          27: 55,
          28: 55,
          29: 55,
          30: 55,
          // 31–50 y
          31: 55,
          32: 55,
          33: 55,
          34: 55,
          35: 55,
          36: 55,
          37: 55,
          38: 55,
          39: 55,
          40: 55,
          41: 55,
          42: 55,
          43: 55,
          44: 55,
          45: 55,
          46: 55,
          47: 55,
          48: 55,
          49: 55,
          50: 55,
          // 51–70 y
          51: 55,
          52: 55,
          53: 55,
          54: 55,
          55: 55,
          56: 55,
          57: 55,
          58: 55,
          59: 55,
          60: 55,
          61: 55,
          62: 55,
          63: 55,
          64: 55,
          65: 55,
          66: 55,
          67: 55,
          68: 55,
          69: 55,
          70: 55,
          // > 70 y
          71: 55,
        }
      },
    }
  },
  zinc : {
    name: 'Zinc',
    measure: Measure.Mg,
    lifestyleGroup: {
      children: {
        interval: {
          ['1-3 y']: 3,
          ['4-8 y']: 5,
        },
        year: {
          // 1-3 y
          1: 3,
          2: 3,
          3: 3,
          // 4-8 y
          4: 5,
          5: 5,
          6: 5,
          7: 5,
          8: 5,
        }
      },
      males: {
        interval: {
          ['9–13 y']: 8,
          ['14–18 y']: 11,
          ['19–30 y']: 11,
          ['31–50 y']: 11,
          ['51–70 y']: 11,
          ['> 70 y']: 11,
        },
        year: {
          // 9–13 y
          9: 8,
          10: 8,
          11: 8,
          12: 8,
          13: 8,
          // 14–18 y
          14: 11,
          15: 11,
          16: 11,
          17: 11,
          18: 11,
          // 19–30 y
          19: 11,
          20: 11,
          21: 11,
          22: 11,
          23: 11,
          24: 11,
          25: 11,
          26: 11,
          27: 11,
          28: 11,
          29: 11,
          30: 11,
          // 31–50 y
          31: 11,
          32: 11,
          33: 11,
          34: 11,
          35: 11,
          36: 11,
          37: 11,
          38: 11,
          39: 11,
          40: 11,
          41: 11,
          42: 11,
          43: 11,
          44: 11,
          45: 11,
          46: 11,
          47: 11,
          48: 11,
          49: 11,
          50: 11,
          // 51–70 y
          51: 11,
          52: 11,
          53: 11,
          54: 11,
          55: 11,
          56: 11,
          57: 11,
          58: 11,
          59: 11,
          60: 11,
          61: 11,
          62: 11,
          63: 11,
          64: 11,
          65: 11,
          66: 11,
          67: 11,
          68: 11,
          69: 11,
          70: 11,
          // > 70 y
          71: 11,
        }
      },
      females: {
        interval: {
          ['9–13 y']: 8,
          ['14–18 y']: 9,
          ['19–30 y']: 8,
          ['31–50 y']: 8,
          ['51–70 y']: 8,
          ['> 70 y']: 8,
        },
        year: {
          // 9–13 y
          9: 8,
          10: 8,
          11: 8,
          12: 8,
          13: 8,
          // 14–18 y
          14: 9,
          15: 9,
          16: 9,
          17: 9,
          18: 9,
          // 19–30 y
          19: 8,
          20: 8,
          21: 8,
          22: 8,
          23: 8,
          24: 8,
          25: 8,
          26: 8,
          27: 8,
          28: 8,
          29: 8,
          30: 8,
          // 31–50 y
          31: 8,
          32: 8,
          33: 8,
          34: 8,
          35: 8,
          36: 8,
          37: 8,
          38: 8,
          39: 8,
          40: 8,
          41: 8,
          42: 8,
          43: 8,
          44: 8,
          45: 8,
          46: 8,
          47: 8,
          48: 8,
          49: 8,
          50: 8,
          // 51–70 y
          51: 8,
          52: 8,
          53: 8,
          54: 8,
          55: 8,
          56: 8,
          57: 8,
          58: 8,
          59: 8,
          60: 8,
          61: 8,
          62: 8,
          63: 8,
          64: 8,
          65: 8,
          66: 8,
          67: 8,
          68: 8,
          69: 8,
          70: 8,
          // > 70 y
          71: 8,
        }
      },
    }
  },
};

