import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { NavLink, Link } from "react-router-dom";

export function Scard({ title, images, path }) {
  return (
    <div>
      <Card className=" w-96 ml-10 mt-10">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={images}
            alt="card-image"
            className=" w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={path}>
            <Button>Visit</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
