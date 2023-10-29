export const searchParams = (
  query: string,
  orderByField: string,
  orderBy: 'asc' | 'desc',
): any => {
  const params: any = {};

  if (query) {
    params.where = {
      name: {
        contains: query,
      },
    };
  }

  if (orderByField) {
    params.orderBy = {
      [orderByField]: orderBy,
    };
  } else {
    params.orderBy = {
      id: orderBy,
    };
  }

  return params;
};
