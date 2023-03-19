import { SqlClint } from "msnodesqlv8";


export const useQueryHandler = async (query) =>
  SqlClint.query(process.env.REACT_APP_CONNECTION_STRING, query, (error, response) => {
    if (error) {
      console.error(err);
      return;
    }
    return response;
  });