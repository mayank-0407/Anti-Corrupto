import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
function Slider({ imge, vehicles }) {
  return (
    <Card className="w-1/3 max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={imge}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          PLATE NO- <a className="font-thin">PB11-XX-XXXX</a>
        </Typography>
        <Typography variant="h6" color="gray" className="mb-8 font-normal ">
          <ul>
            <li>
              vehicle type- <a className="font-bold text-lg ">{vehicles}</a>
            </li>
            <li></li>
          </ul>
        </Typography>
        <a href="#" className="inline-block gap-10 space-y-4">
          <Button variant="filled ">Documents</Button>
          <Button variant="filled">Challans ON Vehicle</Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default Slider;
