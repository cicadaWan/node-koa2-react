import { observable, action } from 'mobx';
import { message, Modal } from 'antd';
import { getList, deleteList, addList, updateList } from '../api';

class CompanyStore {
  // 查询
  @observable companyList = [];

  @action.bound
  async getCompanyList(id) {
    await getList(id).then(({ data }) => {
      console.log(data, 'data是返回的数据')
      this.companyList = data.data;
    }).catch(() => {
      message.error('数据错误，请重试')
    });
  };

  // 增加
  async add(data) {
    await addList(data).then(({ data }) => {
      console.log(data, 'data是返回的数据')
      if (data.flag === 1) {
        this.getCompanyList('');
      }
    }).catch(() => {
      alert('语文题')
    });
  };

  // 删除
  async handleDeleteData(id) {
    await deleteList(id).then(({ data }) => {
      if (data.flag === 1) {
        Modal.success({
          content: '删除成功',
        });
        this.getCompanyList('');
      }
    }).catch(() => {
      alert('数据错误222')
    });
  }

  // 修改更新
  @action.bound
  async handleUpdateCompany(record) {
    await updateList(record).then(({ data }) => {
      console.log(data, 999999999)
      if (data.flag === 1) {
        Modal.success({
          content: '更新成功',
        });
        this.getCompanyList('');
      }
    }).catch(() => {
      alert('数据错误1');
    })
  }

  // 控制弹窗显隐
  @observable isShowModal = false;

  @action.bound
  changeCompanyModal() {
    this.isShowModal = !this.isShowModal;
  }
  // 更新时候带值 todo 处理方式不好
  @observable updateData = '';

  @action.bound
  update(record) {
    this.updateData = record;
  }
}
export default new CompanyStore();