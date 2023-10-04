

export const useBootstrapDatePicker = (props) => {
    const formatValue = function (event) {
        const value = event.target.value;
        
        const formattedValue = changeFormat(value, props.outputFormat);
        return formattedValue;
    }

    function changeFormat(value, outputFormat) {
        if(!value) return null;
        
        const [year, month, day] = value.split('-');
        
        return outputFormat
            .replace('dd', day)
            .replace('mm', month)
            .replace('yyyy', year);
    }

    return {
        formatValue
    }
}