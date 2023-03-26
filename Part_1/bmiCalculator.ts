type BMIInfo = {
  name: string;
  range: [number, number];
};

interface BMIValues {
  weight: number;
  height: number;
};

const bmiRanges: BMIInfo[] = [
  { name: "Underweight", range: [0, 18.5] },
  { name: "Normal weight", range: [18.5, 25] },
  { name: "Overweight", range: [25, 30] },
  { name: "Obese", range: [30, Infinity] },
];

const parseArguments = (args: string[]): BMIValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      weight: Number(args[2]),
      height: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const calculateBmi = (weight: number, height: number): string => {

  const bmi = weight / ((height/100) ** 2)
  for (const a of bmiRanges) {
    if (bmi >= a.range[0] && bmi < a.range[1]) 
      return `weight of ${weight} and height of ${height} equal ${bmi} - ${a.name}`
  }

}
const { weight, height } = parseArguments(process.argv);
console.log(calculateBmi(weight, height))