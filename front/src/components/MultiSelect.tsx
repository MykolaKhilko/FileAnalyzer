import {Autocomplete, Chip, TextField} from "@mui/material";

interface Props {
    className: string;
    label: string;
    options: string[];
    onChange: (values: readonly string[]) => void;
}

export default function MultiSelect({onChange, label, ...rest}: Props) {
    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            freeSolo
            renderTags={(value: readonly string[], getTagProps) => {
                    onChange(value)
                    return value.map((option: string, index: number) => (
                        <Chip variant="outlined" label={option} {...getTagProps({index})} />
                    ))
                }
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label={label}
                />
            )}
            {...rest}
        />)
}