const { __ } = wp.i18n;
const { TextControl, PanelBody } = wp.components;
const { Fragment } = wp.element;

export const renderSettings = props => {
	const { attributes, setAttributes } = props;
	const { range, sheetId, sheetName, sheetRange } = attributes;

	let settings;
	if (!range) {
		settings = (
			<Fragment>
				<TextControl
					label={__(
						"Sheet URL",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					value={sheetId}
					onChange={newUrl =>
						setAttributes({
							sheetId: newUrl === undefined ? "none" : newUrl
						})
					}
					initialOpen={true}
				/>
				<TextControl
					label={__(
						"Sheet Name",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					value={sheetName}
					onChange={newName =>
						setAttributes({
							sheetName: newName === undefined ? "none" : newName
						})
					}
					initialOpen={true}
				/>
				<TextControl
					label={__(
						"Cell or Range",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					value={sheetRange}
					onChange={newRange =>
						setAttributes({
							sheetRange:
								newRange === undefined ? "none" : newRange
						})
					}
					initialOpen={true}
				/>
			</Fragment>
		);
	} else {
		settings = (
			<TextControl
				label={__(
					"Please set the cell or range to fetch data in A1 notation. Example : Sheets1!A1:E",
					"wp-simple-spreadsheet-fetcher-for-google"
				)}
				value={range}
				onChange={newRange =>
					setAttributes({
						range: newRange === undefined ? "none" : newRange
					})
				}
				initialOpen={true}
			/>
		);
	}
	return (
		<PanelBody
			title={__(
				"Fetch Data Setting",
				"wp-simple-spreadsheet-fetcher-for-google"
			)}
			initialOpen={true}
		>
			{settings}
		</PanelBody>
	);
};
