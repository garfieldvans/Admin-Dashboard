import { Flex } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import Modal from '../../../components/Modal';
import { useStudent } from '../../../services';
import { useCustomToast } from '../../../utils';

const initialState = {
  name: '',
  email: '',
  phoneNumber: '',
  enrollNumber: '',
  admissionDate: '',
  image: '',
};

function ModalFormStudent({ data, onClose, isOpen, refresh }) {
  const { showToastError, showToastSuccess } = useCustomToast();
  const { addStudent, updateStudent } = useStudent();
  const [form, setForm] = useState(initialState);
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setForm({ ...data });
    } else {
      setForm(initialState);
    }
  }, [isOpen]);

  const handleChange = e => {
    if (e.target.name === 'image') {
      setForm({
        ...form,
        image: e.target.files[0],
      });
      return setImage(e.target.files[0]);
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await addStudent(formData);
      showToastSuccess(res?.message);
      onClose();
      refresh();
    } catch (e) {
      showToastError(e);
    }
    setIsLoading(false);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await updateStudent(data?.id, {
        ...form,
        admissionDate: dayjs(form.admissionDate).format('YYYY-MM-DD'),
      });
      showToastSuccess(res?.message);
      onClose();
      refresh();
    } catch (e) {
      showToastError(e);
    }
    setIsLoading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={data ? handleUpdate : handleAdd}
      title={`${data ? 'Edit' : 'Add'} Data`}
      confirmButtonText="Save"
      isButtonLoading={isLoading}
    >
      <Flex gap="16px" direction={'column'}>
        <FormInput
          name="name"
          value={form.name}
          onChange={handleChange}
          label="Name"
          placeholder="Karthi"
        />
        <FormInput
          name="email"
          value={form.email}
          onChange={handleChange}
          label="Email"
          placeholder="karthi@gmail.com"
        />
        <FormInput
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          label="Phone"
          placeholder="085XXX"
        />
        <FormInput
          name="enrollNumber"
          value={form.enrollNumber}
          onChange={handleChange}
          label="Enroll Number"
          placeholder="123456"
        />
        <FormInput
          type="date"
          name="admissionDate"
          value={form.admissionDate}
          onChange={handleChange}
          label="Date of Admission"
          placeholder="2023-12-31"
        />
        <FormInput
          type="file"
          name="image"
          onChange={handleChange}
          label="Image"
          accept="image/*"
        />
      </Flex>
    </Modal>
  );
}

export default ModalFormStudent;
