const timeline = [
  {
    id: "1",
    avatar:
      "https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106_1280.jpg",
    username: "Juan",
    message: "Me encanta escuchar The Killers!",
  },
  {
    id: "2",
    avatar:
      "https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NHTHJWYS44DTQC7U5TNXJRPHPA.jpg",
    username: "Thom",
    message: "Fake Plastic Trees",
  },
  {
    id: "1",
    avatar:
      "https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106_1280.jpg",
    username: "Juan",
    message: "Me encanta escuchar The Killers!",
  },
  {
    id: "2",
    avatar:
      "https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NHTHJWYS44DTQC7U5TNXJRPHPA.jpg",
    username: "Thom",
    message: "Fake Plastic Trees",
  },
  {
    id: "1",
    avatar:
      "https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106_1280.jpg",
    username: "Juan",
    message: "Me encanta escuchar The Killers!",
  },
  {
    id: "2",
    avatar:
      "https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NHTHJWYS44DTQC7U5TNXJRPHPA.jpg",
    username: "Thom",
    message: "Fake Plastic Trees",
  },
  {
    id: "1",
    avatar:
      "https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106_1280.jpg",
    username: "Juan",
    message: "Me encanta escuchar The Killers!",
  },
  {
    id: "2",
    avatar:
      "https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NHTHJWYS44DTQC7U5TNXJRPHPA.jpg",
    username: "Thom",
    message: "Fake Plastic Trees",
  },
  {
    id: "1",
    avatar:
      "https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106_1280.jpg",
    username: "Juan",
    message: "Me encanta escuchar The Killers!",
  },
  {
    id: "2",
    avatar:
      "https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NHTHJWYS44DTQC7U5TNXJRPHPA.jpg",
    username: "Thom",
    message: "Fake Plastic Trees",
  },
  {
    id: "1",
    avatar:
      "https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106_1280.jpg",
    username: "Juan",
    message: "Me encanta escuchar The Killers!",
  },
  {
    id: "2",
    avatar:
      "https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NHTHJWYS44DTQC7U5TNXJRPHPA.jpg",
    username: "Thom",
    message: "Fake Plastic Trees",
  },
  {
    id: "1",
    avatar:
      "https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106_1280.jpg",
    username: "Juan",
    message: "Me encanta escuchar The Killers!",
  },
  {
    id: "2",
    avatar:
      "https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NHTHJWYS44DTQC7U5TNXJRPHPA.jpg",
    username: "Thom",
    message: "Fake Plastic Trees",
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(timeline))
}
