import { Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

const FileUpload = () => {
  return (
    <Button variant="outlined" startIcon={<UploadIcon />} disabled>
      파일첨부
    </Button>
  );
};

export default FileUpload;
