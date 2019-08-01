import React from 'react';
import FileUploader from 'react-firebase-file-uploader';
import { LABELS } from '../../constants/locale';
import { Label } from './FileUploaderLabel.style';

const FileUploaderLabel = () => {
    const handleUploadStart = () => {
        // TODO add logic
    };

    const handleUploadError = () => {
        // TODO add logic
    };

    const handleProgress = () => {
        // TODO add logic
    };

    return (
        <Label>
            {LABELS.pickAvatar}
            <FileUploader
                hidden
                accept="image/*"
                storageRef={window.firebase.storage().ref('images')}
                onUploadStart={handleUploadStart}
                onUploadError={handleUploadError}
                onUploadSuccess={(...args) => {
                    console.log(args);
                }}
                onProgress={handleProgress}
            />
        </Label>
    );
};

export default FileUploaderLabel;
