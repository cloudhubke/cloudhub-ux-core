import React from 'react';
import Dialog from '../dialog/Dialog';
import Button from '../Button';
import CheckBox from '../CheckBox';
import Text from '../Text';
import DialogHeader from '../dialog/DialogHeader';
import DialogContent from '../dialog/DialogContent';
import DialogActions from '../dialog/DialogActions';

import Form from '../form/Form';
import Field from '../form/Field';
import ThemeContext from '../theme/ThemeContext';

const ExportColumnSelector = ({
  setHeaders = () => {},
  open,
  onCancel = () => {},
  csvLinkElem,
  exportHeaders = [{ label: 'id', key: 'id' }],
  defaultExport,
}) => {
  const { colors, sizes } = React.useContext(ThemeContext);
  const [checked, setChecked] = React.useState({});

  React.useEffect(() => {
    if (Array.isArray(defaultExport)) {
      const defaultChecked = {};
      defaultExport.forEach((item) => {
        defaultChecked[item] = true;
      });
      setTimeout(() => {
        setChecked(defaultChecked);
      });
    }
    // eslint-disable-next-line
  }, [JSON.stringify(defaultExport)]);
  const exportList = (columns) => {
    try {
      const cols = [];
      Object.keys(columns).forEach((col) => {
        if (columns[col] === true) {
          cols.push(col);
        }
        if (columns[col] && typeof columns[col] === 'object') {
          Object.keys(columns[col]).forEach((subcol) => {
            if (columns[col][subcol] === true) {
              cols.push(`${col}.${subcol}`);
            }
          });
        }
      });
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
                  name={(col || {}).key || col}
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
