class DealsView extends View {

    constructor(element){
        super(element);
    }

    template(dealList){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>QUANTITY</th>
                    <th>VALUE</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${
                    dealList.deals.map(
                         deal => {
                            return `
                                <tr>
                                    <td>${DateHelper.dateToTxt(deal.date)}</>
                                    <td>${deal.quantity}</>
                                    <td>${deal.value}</>
                                    <td>${deal.volume}</>
                                </tr>
                            `
                        }
                    ).join('')
                }
            </tbody>
        
            <tfoot>
                <td colspan="3" style="text-align:right;font-weight:bold;font-size:20px">Σ</>
                <td colspan="1">${
                    dealList.deals.reduce((total, deal) => total + deal.volume, 0)
                }</td>
            </tfoot>
        </table>
        `;
    }

}