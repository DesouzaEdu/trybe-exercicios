const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const medias = grades.map((element) => element.reduce((acc, curr) => acc + curr) / element.length);
  return students.map((student, index) => ({
      name: student,
      average: medias[index],
  }));
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
console.log(studentAverage());