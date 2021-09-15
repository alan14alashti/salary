import DualListBox from 'react-dual-listbox'

const DualListBoxx = ({options, selected, onChange}) => {
    return (
        <DualListBox
            options={options}
            selected={selected}
            onChange={onChange}
        />
    );
}
 
export default DualListBoxx;


