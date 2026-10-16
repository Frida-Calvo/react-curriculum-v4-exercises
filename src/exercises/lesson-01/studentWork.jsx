//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Frida Calvo Huerta';
  const age = 24;
  const hobbyList = [
    `photography`,
    `reading`,
    `listening to music`,
    `watching anime`,
    `exercising at the gym`,
    `trying out new recipes`,
  ];

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {' '}
        I recently graduated from UC Berkeley, where I studied public health,
        anthropology and human-centered design. I'm currently learning web
        development through Code the Dream. I'm also training as a pastry chef
        in the baking & pastry program at CCSF! I'm also {age} years old.{' '}
      </p>
      <p>My hobbies include:</p>
      <ul>
        {hobbyList.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
