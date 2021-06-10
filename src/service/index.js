import axios from "axios";

import {statusConsts} from '../consts';

axios.defaults.baseURL = "https://run.mocky.io";

const getEntries = async () => {
  const request = {
    url: "/v3/b20b77ab-7e67-4375-b4ea-233d09177da3",
    method: "GET"
  };

  const response = await axios(request);

  if (response.status === 200)
    return {
      status: statusConsts.SUCCESS,
      data: response.data
    };
  else
    return {
      status: statusConsts.FAILED,
      data: []
    };
};

export { getEntries };
