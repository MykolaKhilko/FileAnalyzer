import {Autocomplete, Chip, TextField} from "@mui/material";

interface MultiSelectProps {
    label: string;
    opts: string[];
    onChange: (values: readonly string[]) => void;
}

export default function MultiSelect({label, opts, onChange}: MultiSelectProps) {
    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            options={opts}
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
        />)
}