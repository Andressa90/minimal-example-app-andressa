export async function GET() {
  const student = {
    name: "Andressa",
    course: "Arquitetura Serverless",
    activity: "Function Vercel",
    date: new Date().toISOString(),
  };

  return Response.json(student);
}
