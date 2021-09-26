import React from 'react';
import BasicTable from '../../../components/tables/BasicTable';

import TABLE_HEADER_COLUMNS from '../../../components/tables/TABLE_HEADER_COLUMNS';
import TABLE_DATA_SAMPLES from '../../../components/tables/TABLE_DATA_SAMPLES';

const BasicTableSample = () => {
	return (
		<BasicTable
			TABLE_HEADER_COLUMNS={TABLE_HEADER_COLUMNS}
			TABLE_DATA_SAMPLES={TABLE_DATA_SAMPLES}
		/>
	);
};

export default BasicTableSample;
