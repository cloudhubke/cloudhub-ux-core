import React from 'react';
import Dialog from '../dialogs/Dialog';
import Button from '../Button';
import CheckBox from '../CheckBox';
import Text from '../Text';
import DialogHeader from '../dialogs/DialogHeader';
import DialogContent from '../dialogs/DialogContent';
import DialogActions from '../dialogs/DialogActions';

import Form from '../form/Form';
import Field from '../form/Field';
import ThemeContext from '../theme/ThemeContext';

function getChecked({ defaultExport, exportHeaders }) {
  const defaultChecked = {};
  if (Array.isArray(defaultExport) && defaultExport.length > 0) {
    defaultExport.forEach((item) => {
      defaultChecked[item] = true;
    });
  } else if (Array.isArray(exportHeaders)) {
    exportHeaders.forEach((item) => {
      const { key } = item;
      defaultChecked[`${key}`.replace(/\./g, '__')] = true;
    });
  }

  return defaultChecked;
}

const ExportColumnSelector = ({
  setHeaders = () => {},
  open,
  onCancel = () => {},
  csvLinkElem,
  exportHeaders = [{ label: 'id', key: 'id' }],
  defaultExport,
}) => {
  const { colors, sizes } = React.useContext(ThemeContext);
  const [checked] = React.useState(
    getChecked({ defaultExport, exportHeaders })
  );

  const exportList = (columns) => {
    /*
      Construct the react-csv export headers array
      [{
        label: 'label',
        key: 'key',
      }
    */
    try {
      const cols = Object.keys(columns)
        .map((col) => {
          if (columns[col] === true) {
            return `${col}`.replace(/__/g, '.');
          }
          return null;
        })
        .filter(Boolean);

      const tableHeaders = exportHeaders
        .map((item) => {
          if (typeof item === 'string' && cols.includes(item)) {
            return { label: item, key: item };
          }
          if (item && item.key && cols.includes(item.key)) {
            return item;
          }
          return null;
        })
        .filter(Boolean);

      setHeaders(tableHeaders);
      setTimeout(() => {
        if (csvLinkElem && csvLinkElem.current) {
          csvLinkElem.current.link.click();
          onCancel();
        }
      }, 200);
    } catch (error) {}
  };
  return (
    <Dialog
      maxWidth="sm"
      minHeight="50vh"
      style={{ margin: 'auto', height: 200 }}
      onClose={onCancel}
      open={open}
    >
      <Form
        onSubmit={exportList}
        initialValues={checked || {}}
        render={({ handleSubmit, submitting }) => (
          <React.Fragment>
            <DialogHeader onClose={onCancel}>Export Entries</DialogHeader>
            <DialogContent>
              <Text h4 bold style={{ alignSelf: 'center' }}>
                Select Columns to Export
              </Text>
              {exportHeaders.map((col) => (
                <Field
                  key={(col || {}).key || col}
                  name={`${(col || {}).key || col}`.replace(/\./g, '__')}
                  component={CheckBox}
                  height={sizes.icons.small}
                  tag={(col || {}).label || col}
                />
              ))}
            </DialogContent>
            <DialogActions>
              <Button contained color={colors.error} onClick={onCancel}>
                Cancel
              </Button>
              <Button
                contained
                color={colors.primary}
                onClick={handleSubmit}
                disabled={submitting}
              >
                Export
              </Button>
            </DialogActions>
          </React.Fragment>
        )}
      />
    </Dialog>
  );
};
export default ExportColumnSelector;
