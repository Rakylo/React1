function Student(props) {
  return (
    <div>
      <h1>Student</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
export default Student;
