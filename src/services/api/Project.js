import axios from 'axios'

export default
{
    /**
     * get list project
     *
     * @params {page}
     * @return {object}
     */
    async getProjects(page = 1)
    {
        let query = `{projects(limit:10,page:${page}){data{id name code status start_date description}total per_page}}`

        return await axios.post('', {query: query})
    },

    /**
     * get project detail
     *
     * @params {id}
     * @return {object}
     */
    async getDetail(id)
    {
        let query = `{project(id:${id}){id name code start_date end_date description backlogs(limit:10,page:1){total per_page data{id name code description order points}}}}`

        return await axios.post('', {query: query})
    },

    /**
     * get project baclogs
     *
     * @params {id}
     * @params {page}
     * @return {object}
     */
    async getBacklogs(id, page)
    {
        let query = `{project(id:${id}){backlogs(limit:10,page:${page}){total per_page data{id name code description order points}}}}`

        return await axios.post('', {query: query})
    },

    async reorderBacklog(orders)
    {
        let query = `mutation{reorder_backlog(order:"${orders}")}`

        return await axios.post('', {query: query})
    }
}
