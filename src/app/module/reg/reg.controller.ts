import { Request, Response } from "express";
import { catchAsync } from '../../shared/catchAsync';
import status from "http-status";
import { REGService } from "./reg.service";
import { sendResponse } from "../../shared/sendResponse";


const regService = new REGService();

const regStart = async (req: Request, res: Response) => {
  console.log("connected ", req.query);
res.status(200).json({
  message: "connected registration route is working",
});
};

const ingressDoctors = catchAsync(async (req: Request, res: Response) => {

    const result = await regService.ingestDoctorsData();
    
    sendResponse(res, {
      success: true,
      httpStatusCode: status.OK,
      message: "Doctors ingress successful",
      data: result,
    });
});


const queryRag = catchAsync(async (req: Request, res: Response) => {
  const { query } = req.body;

  if (!query) {
    return sendResponse(res, {
      success: false,
      httpStatusCode: status.BAD_REQUEST,
      message: "Query parameter is required",
    });
  }

  const result = await regService.generateAnswer();

  sendResponse(res, {
    success: true,
    httpStatusCode: status.OK,
    message: "Doctors data retrieved successfully",
    data: result,
  });
});

export const regController = {
  regStart,
  ingressDoctors,
  queryRag,
};
