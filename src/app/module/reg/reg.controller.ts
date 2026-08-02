import { Request, Response } from "express";
import { catchAsync } from '../../shared/catchAsync';
import status from "http-status";

const regStart = async (req: Request, res: Response) => {
  console.log("connected ", req.query);
res.status(200).json({
  message: "connected registration route is working",
});
};

const ingressDoctors = catchAsync(async (req: Request, res: Response) => {

    const result = await regService.sendResponse(res, {
      success: true,
      httpStatusCode: status.OK,
      message: "Doctors ingress successful",
      data: result,
    });
});

export const regController = {
  regStart,
  ingressDoctors,
};
