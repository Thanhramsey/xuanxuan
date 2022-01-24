<template>
  <div id="xoay" class="container">
    <v-row>
      <v-col md="3"></v-col>
      <v-col md="6">
        <v-btn
          @click="$router.push('/')"
          class="noi-len"
          style="z-index: 10; margin-bottom: 20px"
        >
          Trở về
        </v-btn>
      </v-col>
      <v-col md="3"></v-col>
    </v-row>
    <div class="row">
      <v-spacer></v-spacer>
      <v-col md="8">
        <v-row>
          <div class="col-md-4">
            <v-text-field label="Nhập tên của bạn" outlined solo v-model="ten">
            </v-text-field>
          </div>
          <div class="col-md-4">
            <v-text-field label="Tuổi nữa nhé" outlined solo v-model="namsinh"></v-text-field>
          </div>
          <div class="col-md-4">
			<v-select
              outlined
              solo
              label="Bạn là nam hay nữ ?"
              :items="items"
			  item-text="state"
              item-value="abbr"
              v-model="isMale"
            >
            </v-select>
            <!-- <v-select
              outlined
              solo
              label="Bạn muốn xem về ?"
              :items="items"
              item-text="state"
              item-value="abbr"
              return-object
              v-model="select"
            >
            </v-select> -->
          </div>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
    </div>
    <v-btn
      @click="generateContent()"
      class="noi-len"
      style="z-index: 10; margin-bottom: 20px"
    >
      Gieo quẻ
    </v-btn>
    <v-dialog v-model="dialog" width="500" height="500" class="mtp-dialog">
      <v-card>
        <v-card-title class="text-h5 dialog-cl">
          Thông tin cho bạn
        </v-card-title>

        <v-card-text v-html="content">
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Particles from "particles.vue";

export default Vue.extend({
  name: "boi",
  components: {},
  data() {
    return {
      ten: "",
      namsinh: 0,
	  isMale:true,
      content: "Nội dung",
      dialog: false,
      select: { state: "Tình duyên", abbr: "love" },
      items: [
		{ state: "Nam", abbr: true },
        { state: "Nữ", abbr: false },
        // { state: "Tình duyên", abbr: "love" },
        // { state: "Sự nghiệp", abbr: "job" },
        // { state: "Tổng quát", abbr: "all" },
      ],
	  namTuoi:[
{year:1952,name:'Nhâm Thìn',tamtai:'x',hoangoc:'',linknam:'https://lich365.net/tu-vi-nham-thin-2022-nam-mang-1952.html',linknu:'https://lich365.net/tu-vi-nham-thin-2022-nu-mang-1952.html',tomtat:'Tuổi Thìn là những người có ý chí, ham học hỏi. Vì vậy dù là thời điểm nào, họ cũng sẽ có những mục tiêu rõ ràng và hành động dứt khoát.Sang năm Nhâm Dần, tuổi Thìn sẽ có những mục tiêu mới. Tuy có phần thử thách nhưng bản thân cần nỗ lực, làm việc hết sức mình thì sẽ vượt qua được.'},
{year:1953,name:'Quý Tỵ',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-quy-ty-2022-nam-mang-1953.html',linknu:'https://lich365.net/tu-vi-quy-ty-2022-nu-mang-1953.html',tomtat:'Người tuổi Tỵ trong năm 2022 sẽ để được một khoản tiết kiệm, hoặc sắm sửa tài sản có giá trị.Mục tiêu hàng đầu của tuổi Tỵ là tích lũy tài sản. Vì vậy trong năm 2022 sẽ là thời cơ họ đạt được điều đó.Tuy vậy cũng cần bảo quản tốt tiền bạc, không nên cho người khác vay mượn quá nhiều.'},
{year:1954,name:'Giáp Ngọ',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-giap-ngo-2022-nam-mang-1954.html',linknu:'https://lich365.net/tu-vi-giap-ngo-2022-nu-mang-1954.html',tomtat:'Tuổi Ngọ là những người thích khám phá sự mới mẻ, liên tục học hỏi để cải thiện bản thân.Đối với những ai trước kia chưa tìm được một công việc phù hợp thì năm nay sẽ thành công hơn, gặt hái được nhiều thành quả, công việc thăng tiến. Những công việc tay trái cũng mang tới nguồn thu tốt cho người tuổi Ngọ trong năm này.'},
{year:1955,name:'Ất Mùi',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-at-mui-2022-nam-mang-1955.html',linknu:'https://lich365.net/tu-vi-at-mui-2022-nu-mang-1955.html',tomtat:'Người tuổi Mùi trong năm 2022 sẽ có nhiều thuận lợi trong chuyện tình cảm gia đình, gia đạo yên vui, con cái thành đạt.Trong năm này bản mệnh sẽ có nhiều tin vui đến bất ngờ, cuộc sống bình yên, hạnh phúc. Chú ý hơn trên phương diện sức khỏe. Đặc biệt những người tuổi tác đã cao nên tập luyện thể dục, gìn giữ sức khỏe của bản mệnh.'},
{year:1956,name:'Bính Thân',tamtai:'x',hoangoc:'',linknam:'https://lich365.net/tu-vi-binh-than-2022-nam-mang-1956.html',linknu:'https://lich365.net/tu-vi-binh-than-2022-nu-mang-1956.html',tomtat:'Dần - Thân thuộc bộ Tứ hành xung, vì vậy vận trình năm 2022 sẽ có phần thử thách hơn đối với người tuổi Thân.Nhưng đây lại là quãng thời gian vô cùng bổ ích, người tuổi Thân sẽ có nhiều bài học, nhiều kinh nghiệm hơn. Và thành quả đạt được trong tương lai sẽ vô cùng xứng đáng.Vượt qua năm 2022, người tuổi Thân sẽ có nền tảng, tích lũy thêm kiến thức cho cuộc sống trong tương lai.'},
{year:1957,name:'Đinh Dậu',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-dinh-dau-2022-nam-mang-1957.html',linknu:'https://lich365.net/tu-vi-dinh-dau-2022-nu-mang-1957.html',tomtat:'Người tuổi Dậu trong năm 2022 sẽ có cơ hội trải nghiệm nhiều điều mới mẻ, thú vị trong cuộc sống. Năm này bản mệnh sẽ có nhiều lời mời hợp tác làm ăn, kinh doanh. Công việc tiến triển tốt hơn so với năm cũ.Có nhiều mối quan hệ xã giao, bản mệnh ra ngoài xã hội được mọi người yêu mến, kính trọng. Nhờ vào mối quan hệ bạn bè tốt mà công việc cũng thuận lợi hơn rất nhiều.'},
{year:1958,name:'Mậu Tuất',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-mau tuat-2022-nam-mang-1958.html',linknu:'https://lich365.net/tu-vi-mau tuat-2022-nu-mang-1958.html',tomtat:'Năm 2022 hứa hẹn là một năm khởi sắc đối với người tuổi Tuất. Tài chính, tài lộc có phần dư giả, bản mệnh gặp được nhiều may mắn, niềm vui bất ngờ.Trong năm này, nếu đầu tư tài chính vào lĩnh vực nào đó thì cần chú ý tìm hiểu kỹ càng. Sẽ có nguồn thu tốt, tài lộc dồi dào hơn về cuối năm.Bản mệnh cũng gặp được bạn bè tốt, công việc suôn sẻ thuận lợi.'},
{year:1959,name:'Kỷ Hợi',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-ky hoi-2022-nam-mang-1959.html',linknu:'https://lich365.net/tu-vi-ky hoi-2022-nu-mang-1959.html',tomtat:'Năm Nhâm Dần là một năm bình yên đối với người tuổi Hợi. Công việc, tình duyên không có nhiều thử thách, mọi thứ khiến cho bản mệnh hài lòng.Nắm được tử vi 2022 theo ngày tháng năm sinh, tuổi Hợi sẽ có sự điều chỉnh hợp lý. Trong năm, bản thân chỉ cần chú ý tới sức khỏe, tránh thay đổi lớn trong công việc. '},
{year:1960,name:'Canh Tý',tamtai:'x',hoangoc:'x',linknam:'https://lich365.net/tu-vi-canh ty-2022-nam-mang-1960.html',linknu:'https://lich365.net/tu-vi-canh ty-2022-nu-mang-1960.html',tomtat:'Trong năm Nhâm Dần, người tuổi Tý sẽ gặt hái được nhiều cơ hội mới cho bản thân. Đồng nghĩa với đó cũng là những thách thức, trải nghiệm mới mẻ, đôi khi là sóng gió cần vượt qua.Năm nay người tuổi Tý sẽ gặt hái được nhiều thành quả nếu nỗ lực, chăm chỉ làm việc. Tiền bạc bội thu hơn so với năm cũ. Bản mệnh nếu tính toán thu chi hợp lý thì sẽ để được một khoản tiết kiệm cho tương lai.'},
{year:1961,name:'Tân Sửu',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-tan suu-2022-nam-mang-1961.html',linknu:'https://lich365.net/tu-vi-tan suu-2022-nu-mang-1961.html',tomtat:'Bói tử vi 2022 cho thấy, tuổi Sửu năm này có nhiều chuyển biến trong công việc và chuyện tình cảm, đặc biệt đối với những người trẻ tuổi. Công việc có sự thay đổi nhưng theo chiều hướng tích cực, cuộc sống gặp nhiều niềm vui.Trong 12 con giáp, tuổi Sửu là những người "chậm mà chắc", làm việc gì cũng suy tính cẩn thận. Vì vậy trong năm Nhâm Dần này thành quả đạt được sẽ vô cùng mỹ mãn. Trong năm 2022 nếu có làm ăn lớn thì cần hợp tác với những người cùng chung chí hướng sẽ gặt hái được thành công.'},
{year:1962,name:'Nhâm Dần',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-nham dan-2022-nam-mang-1962.html',linknu:'https://lich365.net/tu-vi-nham dan-2022-nu-mang-1962.html',tomtat:'Tuổi Dần là những người có ý chí lớn, nhiều hoài bão. Năm 2022 sẽ là thời điểm để họ khẳng định bản thân, chinh phục những mục tiêu lớn. Khoảng thời gian này tuổi Dần sẽ gặp được quý nhân phù trợ, giúp đỡ trong công việc. Sự nghiệp từ đây cũng sẽ thăng tiến vượt bậc. Tuổi Dần trong năm 2022 nếu muốn làm ăn lớn thì cần kiên trì hơn nữa. Bản thân vẫn còn sự nóng vội thì chỉ thu về được thành quả nhỏ nhoi.'},
{year:1963,name:'Quý Mão',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-quy mao-2022-nam-mang-1963.html',linknu:'https://lich365.net/tu-vi-quy mao-2022-nu-mang-1963.html',tomtat:'Là một năm bình ổn, bạn mệnh được an nhiên, tự tại, không phải suy nghĩ hay lo lắng quá nhiều. Năm nay sức khỏe của người tuổi Mão được cải thiện đáng kể, tinh thần vui tươi, lạc quan.Chuyện công việc duy trì đều đặn, nguồn thu tốt từ công việc tay trái. Gia đạo có thể xảy ra bất hòa, chỉ cần giữ bình tĩnh thì mọi chuyện đều được giải quyết.'},
{year:1964,name:'Giáp Thìn',tamtai:'x',hoangoc:'',linknam:'https://lich365.net/tu-vi-giap-thin-2022-nam-mang-1964.html',linknu:'https://lich365.net/tu-vi-giap-thin-2022-nu-mang-1964.html',tomtat:'Tuổi Thìn là những người có ý chí, ham học hỏi. Vì vậy dù là thời điểm nào, họ cũng sẽ có những mục tiêu rõ ràng và hành động dứt khoát.Sang năm Nhâm Dần, tuổi Thìn sẽ có những mục tiêu mới. Tuy có phần thử thách nhưng bản thân cần nỗ lực, làm việc hết sức mình thì sẽ vượt qua được.'},
{year:1965,name:'Ất Tỵ',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-at-ty-2022-nam-mang-1965.html',linknu:'https://lich365.net/tu-vi-at-ty-2022-nu-mang-1965.html',tomtat:'Người tuổi Tỵ trong năm 2022 sẽ để được một khoản tiết kiệm, hoặc sắm sửa tài sản có giá trị.Mục tiêu hàng đầu của tuổi Tỵ là tích lũy tài sản. Vì vậy trong năm 2022 sẽ là thời cơ họ đạt được điều đó.Tuy vậy cũng cần bảo quản tốt tiền bạc, không nên cho người khác vay mượn quá nhiều.'},
{year:1966,name:'Bính Ngọ',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-binh-ngo-2022-nam-mang-1966.html',linknu:'https://lich365.net/tu-vi-binh-ngo-2022-nu-mang-1966.html',tomtat:'Tuổi Ngọ là những người thích khám phá sự mới mẻ, liên tục học hỏi để cải thiện bản thân.Đối với những ai trước kia chưa tìm được một công việc phù hợp thì năm nay sẽ thành công hơn, gặt hái được nhiều thành quả, công việc thăng tiến. Những công việc tay trái cũng mang tới nguồn thu tốt cho người tuổi Ngọ trong năm này.'},
{year:1967,name:'Đinh Mùi',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-dinh-mui-2022-nam-mang-1967.html',linknu:'https://lich365.net/tu-vi-dinh-mui-2022-nu-mang-1967.html',tomtat:'Người tuổi Mùi trong năm 2022 sẽ có nhiều thuận lợi trong chuyện tình cảm gia đình, gia đạo yên vui, con cái thành đạt.Trong năm này bản mệnh sẽ có nhiều tin vui đến bất ngờ, cuộc sống bình yên, hạnh phúc. Chú ý hơn trên phương diện sức khỏe. Đặc biệt những người tuổi tác đã cao nên tập luyện thể dục, gìn giữ sức khỏe của bản mệnh.'},
{year:1968,name:'Mậu Thân',tamtai:'x',hoangoc:'',linknam:'https://lich365.net/tu-vi-mau-than-2022-nam-mang-1968.html',linknu:'https://lich365.net/tu-vi-mau-than-2022-nu-mang-1968.html',tomtat:'Dần - Thân thuộc bộ Tứ hành xung, vì vậy vận trình năm 2022 sẽ có phần thử thách hơn đối với người tuổi Thân.Nhưng đây lại là quãng thời gian vô cùng bổ ích, người tuổi Thân sẽ có nhiều bài học, nhiều kinh nghiệm hơn. Và thành quả đạt được trong tương lai sẽ vô cùng xứng đáng.Vượt qua năm 2022, người tuổi Thân sẽ có nền tảng, tích lũy thêm kiến thức cho cuộc sống trong tương lai.'},
{year:1969,name:'Kỷ Dậu',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-ky-dau-2022-nam-mang-1969.html',linknu:'https://lich365.net/tu-vi-ky-dau-2022-nu-mang-1969.html',tomtat:'Người tuổi Dậu trong năm 2022 sẽ có cơ hội trải nghiệm nhiều điều mới mẻ, thú vị trong cuộc sống. Năm này bản mệnh sẽ có nhiều lời mời hợp tác làm ăn, kinh doanh. Công việc tiến triển tốt hơn so với năm cũ.Có nhiều mối quan hệ xã giao, bản mệnh ra ngoài xã hội được mọi người yêu mến, kính trọng. Nhờ vào mối quan hệ bạn bè tốt mà công việc cũng thuận lợi hơn rất nhiều.'},
{year:1970,name:'Canh Tuất',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-canh-tuat-2022-nam-mang-1970.html',linknu:'https://lich365.net/tu-vi-canh-tuat-2022-nu-mang-1970.html',tomtat:'Năm 2022 hứa hẹn là một năm khởi sắc đối với người tuổi Tuất. Tài chính, tài lộc có phần dư giả, bản mệnh gặp được nhiều may mắn, niềm vui bất ngờ.Trong năm này, nếu đầu tư tài chính vào lĩnh vực nào đó thì cần chú ý tìm hiểu kỹ càng. Sẽ có nguồn thu tốt, tài lộc dồi dào hơn về cuối năm.Bản mệnh cũng gặp được bạn bè tốt, công việc suôn sẻ thuận lợi.'},
{year:1971,name:'Tân Hợi',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-tan-hoi-2022-nam-mang-1971.html',linknu:'https://lich365.net/tu-vi-tan-hoi-2022-nu-mang-1971.html',tomtat:'Năm Nhâm Dần là một năm bình yên đối với người tuổi Hợi. Công việc, tình duyên không có nhiều thử thách, mọi thứ khiến cho bản mệnh hài lòng.Nắm được tử vi 2022 theo ngày tháng năm sinh, tuổi Hợi sẽ có sự điều chỉnh hợp lý. Trong năm, bản thân chỉ cần chú ý tới sức khỏe, tránh thay đổi lớn trong công việc. '},
{year:1972,name:'Nhâm Tý',tamtai:'x',hoangoc:'x',linknam:'https://lich365.net/tu-vi-nham-ty-2022-nam-mang-1972.html',linknu:'https://lich365.net/tu-vi-nham-ty-2022-nu-mang-1972.html',tomtat:'Trong năm Nhâm Dần, người tuổi Tý sẽ gặt hái được nhiều cơ hội mới cho bản thân. Đồng nghĩa với đó cũng là những thách thức, trải nghiệm mới mẻ, đôi khi là sóng gió cần vượt qua.Năm nay người tuổi Tý sẽ gặt hái được nhiều thành quả nếu nỗ lực, chăm chỉ làm việc. Tiền bạc bội thu hơn so với năm cũ. Bản mệnh nếu tính toán thu chi hợp lý thì sẽ để được một khoản tiết kiệm cho tương lai.'},
{year:1973,name:'Quý Sửu',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-quy-suu-2022-nam-mang-1973.html',linknu:'https://lich365.net/tu-vi-quy-suu-2022-nu-mang-1973.html',tomtat:'Bói tử vi 2022 cho thấy, tuổi Sửu năm này có nhiều chuyển biến trong công việc và chuyện tình cảm, đặc biệt đối với những người trẻ tuổi. Công việc có sự thay đổi nhưng theo chiều hướng tích cực, cuộc sống gặp nhiều niềm vui.Trong 12 con giáp, tuổi Sửu là những người "chậm mà chắc", làm việc gì cũng suy tính cẩn thận. Vì vậy trong năm Nhâm Dần này thành quả đạt được sẽ vô cùng mỹ mãn. Trong năm 2022 nếu có làm ăn lớn thì cần hợp tác với những người cùng chung chí hướng sẽ gặt hái được thành công.'},
{year:1974,name:'Giáp Dần',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-giap-dan-2022-nam-mang-1974.html',linknu:'https://lich365.net/tu-vi-giap-dan-2022-nu-mang-1974.html',tomtat:'Tuổi Dần là những người có ý chí lớn, nhiều hoài bão. Năm 2022 sẽ là thời điểm để họ khẳng định bản thân, chinh phục những mục tiêu lớn. Khoảng thời gian này tuổi Dần sẽ gặp được quý nhân phù trợ, giúp đỡ trong công việc. Sự nghiệp từ đây cũng sẽ thăng tiến vượt bậc. Tuổi Dần trong năm 2022 nếu muốn làm ăn lớn thì cần kiên trì hơn nữa. Bản thân vẫn còn sự nóng vội thì chỉ thu về được thành quả nhỏ nhoi.'},
{year:1975,name:'Ất Mão',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-at-mao-2022-nam-mang-1975.html',linknu:'https://lich365.net/tu-vi-at-mao-2022-nu-mang-1975.html',tomtat:'Là một năm bình ổn, bạn mệnh được an nhiên, tự tại, không phải suy nghĩ hay lo lắng quá nhiều. Năm nay sức khỏe của người tuổi Mão được cải thiện đáng kể, tinh thần vui tươi, lạc quan.Chuyện công việc duy trì đều đặn, nguồn thu tốt từ công việc tay trái. Gia đạo có thể xảy ra bất hòa, chỉ cần giữ bình tĩnh thì mọi chuyện đều được giải quyết.'},
{year:1976,name:'Bính Thìn',tamtai:'x',hoangoc:'x',linknam:'https://lich365.net/tu-vi-binh-thin-2022-nam-mang-1976.html',linknu:'https://lich365.net/tu-vi-binh-thin-2022-nu-mang-1976.html',tomtat:'Tuổi Thìn là những người có ý chí, ham học hỏi. Vì vậy dù là thời điểm nào, họ cũng sẽ có những mục tiêu rõ ràng và hành động dứt khoát.Sang năm Nhâm Dần, tuổi Thìn sẽ có những mục tiêu mới. Tuy có phần thử thách nhưng bản thân cần nỗ lực, làm việc hết sức mình thì sẽ vượt qua được.'},
{year:1977,name:'Đinh Tỵ',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-dinh-ty-2022-nam-mang-1977.html',linknu:'https://lich365.net/tu-vi-dinh-ty-2022-nu-mang-1977.html',tomtat:'Người tuổi Tỵ trong năm 2022 sẽ để được một khoản tiết kiệm, hoặc sắm sửa tài sản có giá trị.Mục tiêu hàng đầu của tuổi Tỵ là tích lũy tài sản. Vì vậy trong năm 2022 sẽ là thời cơ họ đạt được điều đó.Tuy vậy cũng cần bảo quản tốt tiền bạc, không nên cho người khác vay mượn quá nhiều.'},
{year:1978,name:'Mậu Ngọ',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-mau-ngo-2022-nam-mang-1978.html',linknu:'https://lich365.net/tu-vi-mau-ngo-2022-nu-mang-1978.html',tomtat:'Tuổi Ngọ là những người thích khám phá sự mới mẻ, liên tục học hỏi để cải thiện bản thân.Đối với những ai trước kia chưa tìm được một công việc phù hợp thì năm nay sẽ thành công hơn, gặt hái được nhiều thành quả, công việc thăng tiến. Những công việc tay trái cũng mang tới nguồn thu tốt cho người tuổi Ngọ trong năm này.'},
{year:1979,name:'Kỷ Mùi',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-ky-mui-2022-nam-mang-1979.html',linknu:'https://lich365.net/tu-vi-ky-mui-2022-nu-mang-1979.html',tomtat:'Người tuổi Mùi trong năm 2022 sẽ có nhiều thuận lợi trong chuyện tình cảm gia đình, gia đạo yên vui, con cái thành đạt.Trong năm này bản mệnh sẽ có nhiều tin vui đến bất ngờ, cuộc sống bình yên, hạnh phúc. Chú ý hơn trên phương diện sức khỏe. Đặc biệt những người tuổi tác đã cao nên tập luyện thể dục, gìn giữ sức khỏe của bản mệnh.'},
{year:1980,name:'Canh Thân',tamtai:'x',hoangoc:'',linknam:'https://lich365.net/tu-vi-canh-than-2022-nam-mang-1980.html',linknu:'https://lich365.net/tu-vi-canh-than-2022-nu-mang-1980.html',tomtat:'Dần - Thân thuộc bộ Tứ hành xung, vì vậy vận trình năm 2022 sẽ có phần thử thách hơn đối với người tuổi Thân.Nhưng đây lại là quãng thời gian vô cùng bổ ích, người tuổi Thân sẽ có nhiều bài học, nhiều kinh nghiệm hơn. Và thành quả đạt được trong tương lai sẽ vô cùng xứng đáng.Vượt qua năm 2022, người tuổi Thân sẽ có nền tảng, tích lũy thêm kiến thức cho cuộc sống trong tương lai.'},
{year:1981,name:'Tân Dậu',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-tan-dau-2022-nam-mang-1981.html',linknu:'https://lich365.net/tu-vi-tan-dau-2022-nu-mang-1981.html',tomtat:'Người tuổi Dậu trong năm 2022 sẽ có cơ hội trải nghiệm nhiều điều mới mẻ, thú vị trong cuộc sống. Năm này bản mệnh sẽ có nhiều lời mời hợp tác làm ăn, kinh doanh. Công việc tiến triển tốt hơn so với năm cũ.Có nhiều mối quan hệ xã giao, bản mệnh ra ngoài xã hội được mọi người yêu mến, kính trọng. Nhờ vào mối quan hệ bạn bè tốt mà công việc cũng thuận lợi hơn rất nhiều.'},
{year:1982,name:'Nhâm Tuất',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-nham-tuat-2022-nam-mang-1982.html',linknu:'https://lich365.net/tu-vi-nham-tuat-2022-nu-mang-1982.html',tomtat:'Năm 2022 hứa hẹn là một năm khởi sắc đối với người tuổi Tuất. Tài chính, tài lộc có phần dư giả, bản mệnh gặp được nhiều may mắn, niềm vui bất ngờ.Trong năm này, nếu đầu tư tài chính vào lĩnh vực nào đó thì cần chú ý tìm hiểu kỹ càng. Sẽ có nguồn thu tốt, tài lộc dồi dào hơn về cuối năm.Bản mệnh cũng gặp được bạn bè tốt, công việc suôn sẻ thuận lợi.'},
{year:1983,name:'Quý Hợi',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-quy-hoi-2022-nam-mang-1983.html',linknu:'https://lich365.net/tu-vi-quy-hoi-2022-nu-mang-1983.html',tomtat:'Năm Nhâm Dần là một năm bình yên đối với người tuổi Hợi. Công việc, tình duyên không có nhiều thử thách, mọi thứ khiến cho bản mệnh hài lòng.Nắm được tử vi 2022 theo ngày tháng năm sinh, tuổi Hợi sẽ có sự điều chỉnh hợp lý. Trong năm, bản thân chỉ cần chú ý tới sức khỏe, tránh thay đổi lớn trong công việc. '},
{year:1984,name:'Giáp Tý',tamtai:'x',hoangoc:'x',linknam:'https://lich365.net/tu-vi-giap-ty-2022-nam-mang-1984.html',linknu:'https://lich365.net/tu-vi-giap-ty-2022-nu-mang-1984.html',tomtat:'Trong năm Nhâm Dần, người tuổi Tý sẽ gặt hái được nhiều cơ hội mới cho bản thân. Đồng nghĩa với đó cũng là những thách thức, trải nghiệm mới mẻ, đôi khi là sóng gió cần vượt qua.Năm nay người tuổi Tý sẽ gặt hái được nhiều thành quả nếu nỗ lực, chăm chỉ làm việc. Tiền bạc bội thu hơn so với năm cũ. Bản mệnh nếu tính toán thu chi hợp lý thì sẽ để được một khoản tiết kiệm cho tương lai.'},
{year:1985,name:'Ất Sửu',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-at-suu-2022-nam-mang-1985.html',linknu:'https://lich365.net/tu-vi-at-suu-2022-nu-mang-1985.html',tomtat:'Bói tử vi 2022 cho thấy, tuổi Sửu năm này có nhiều chuyển biến trong công việc và chuyện tình cảm, đặc biệt đối với những người trẻ tuổi. Công việc có sự thay đổi nhưng theo chiều hướng tích cực, cuộc sống gặp nhiều niềm vui.Trong 12 con giáp, tuổi Sửu là những người "chậm mà chắc", làm việc gì cũng suy tính cẩn thận. Vì vậy trong năm Nhâm Dần này thành quả đạt được sẽ vô cùng mỹ mãn. Trong năm 2022 nếu có làm ăn lớn thì cần hợp tác với những người cùng chung chí hướng sẽ gặt hái được thành công.'},
{year:1986,name:'Bính Dần',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-binh-dan-2022-nam-mang-1986.html',linknu:'https://lich365.net/tu-vi-binh-dan-2022-nu-mang-1986.html',tomtat:'Tuổi Dần là những người có ý chí lớn, nhiều hoài bão. Năm 2022 sẽ là thời điểm để họ khẳng định bản thân, chinh phục những mục tiêu lớn. Khoảng thời gian này tuổi Dần sẽ gặp được quý nhân phù trợ, giúp đỡ trong công việc. Sự nghiệp từ đây cũng sẽ thăng tiến vượt bậc. Tuổi Dần trong năm 2022 nếu muốn làm ăn lớn thì cần kiên trì hơn nữa. Bản thân vẫn còn sự nóng vội thì chỉ thu về được thành quả nhỏ nhoi.'},
{year:1987,name:'Đinh Mão',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-dinh-mao-2022-nam-mang-1987.html',linknu:'https://lich365.net/tu-vi-dinh-mao-2022-nu-mang-1987.html',tomtat:'Là một năm bình ổn, bạn mệnh được an nhiên, tự tại, không phải suy nghĩ hay lo lắng quá nhiều. Năm nay sức khỏe của người tuổi Mão được cải thiện đáng kể, tinh thần vui tươi, lạc quan.Chuyện công việc duy trì đều đặn, nguồn thu tốt từ công việc tay trái. Gia đạo có thể xảy ra bất hòa, chỉ cần giữ bình tĩnh thì mọi chuyện đều được giải quyết.'},
{year:1988,name:'Mậu Thìn',tamtai:'x',hoangoc:'',linknam:'https://lich365.net/tu-vi-mau-thin-2022-nam-mang-1988.html',linknu:'https://lich365.net/tu-vi-mau-thin-2022-nu-mang-1988.html',tomtat:'Tuổi Thìn là những người có ý chí, ham học hỏi. Vì vậy dù là thời điểm nào, họ cũng sẽ có những mục tiêu rõ ràng và hành động dứt khoát.Sang năm Nhâm Dần, tuổi Thìn sẽ có những mục tiêu mới. Tuy có phần thử thách nhưng bản thân cần nỗ lực, làm việc hết sức mình thì sẽ vượt qua được.'},
{year:1989,name:'Kỷ Tỵ',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-ky-ty-2022-nam-mang-1989.html',linknu:'https://lich365.net/tu-vi-ky-ty-2022-nu-mang-1989.html',tomtat:'Người tuổi Tỵ trong năm 2022 sẽ để được một khoản tiết kiệm, hoặc sắm sửa tài sản có giá trị.Mục tiêu hàng đầu của tuổi Tỵ là tích lũy tài sản. Vì vậy trong năm 2022 sẽ là thời cơ họ đạt được điều đó.Tuy vậy cũng cần bảo quản tốt tiền bạc, không nên cho người khác vay mượn quá nhiều.'},
{year:1990,name:'Canh Ngọ',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-canh-ngo-2022-nam-mang-1990.html',linknu:'https://lich365.net/tu-vi-canh-ngo-2022-nu-mang-1990.html',tomtat:'Tuổi Ngọ là những người thích khám phá sự mới mẻ, liên tục học hỏi để cải thiện bản thân.Đối với những ai trước kia chưa tìm được một công việc phù hợp thì năm nay sẽ thành công hơn, gặt hái được nhiều thành quả, công việc thăng tiến. Những công việc tay trái cũng mang tới nguồn thu tốt cho người tuổi Ngọ trong năm này.'},
{year:1991,name:'Tân Mùi',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-tan-mui-2022-nam-mang-1991.html',linknu:'https://lich365.net/tu-vi-tan-mui-2022-nu-mang-1991.html',tomtat:'Người tuổi Mùi trong năm 2022 sẽ có nhiều thuận lợi trong chuyện tình cảm gia đình, gia đạo yên vui, con cái thành đạt.Trong năm này bản mệnh sẽ có nhiều tin vui đến bất ngờ, cuộc sống bình yên, hạnh phúc. Chú ý hơn trên phương diện sức khỏe. Đặc biệt những người tuổi tác đã cao nên tập luyện thể dục, gìn giữ sức khỏe của bản mệnh.'},
{year:1992,name:'Nhâm Thân',tamtai:'x',hoangoc:'',linknam:'https://lich365.net/tu-vi-nham-than-2022-nam-mang-1992.html',linknu:'https://lich365.net/tu-vi-nham-than-2022-nu-mang-1992.html',tomtat:'Dần - Thân thuộc bộ Tứ hành xung, vì vậy vận trình năm 2022 sẽ có phần thử thách hơn đối với người tuổi Thân.Nhưng đây lại là quãng thời gian vô cùng bổ ích, người tuổi Thân sẽ có nhiều bài học, nhiều kinh nghiệm hơn. Và thành quả đạt được trong tương lai sẽ vô cùng xứng đáng.Vượt qua năm 2022, người tuổi Thân sẽ có nền tảng, tích lũy thêm kiến thức cho cuộc sống trong tương lai.'},
{year:1993,name:'Quý Dậu',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-quy-dau-2022-nam-mang-1993.html',linknu:'https://lich365.net/tu-vi-quy-dau-2022-nu-mang-1993.html',tomtat:'Người tuổi Dậu trong năm 2022 sẽ có cơ hội trải nghiệm nhiều điều mới mẻ, thú vị trong cuộc sống. Năm này bản mệnh sẽ có nhiều lời mời hợp tác làm ăn, kinh doanh. Công việc tiến triển tốt hơn so với năm cũ.Có nhiều mối quan hệ xã giao, bản mệnh ra ngoài xã hội được mọi người yêu mến, kính trọng. Nhờ vào mối quan hệ bạn bè tốt mà công việc cũng thuận lợi hơn rất nhiều.'},
{year:1994,name:'Giáp Tuất',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-giap-tuat-2022-nam-mang-1994.html',linknu:'https://lich365.net/tu-vi-giap-tuat-2022-nu-mang-1994.html',tomtat:'Năm 2022 hứa hẹn là một năm khởi sắc đối với người tuổi Tuất. Tài chính, tài lộc có phần dư giả, bản mệnh gặp được nhiều may mắn, niềm vui bất ngờ.Trong năm này, nếu đầu tư tài chính vào lĩnh vực nào đó thì cần chú ý tìm hiểu kỹ càng. Sẽ có nguồn thu tốt, tài lộc dồi dào hơn về cuối năm.Bản mệnh cũng gặp được bạn bè tốt, công việc suôn sẻ thuận lợi.'},
{year:1995,name:'Ất Hợi',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-at-hoi-2022-nam-mang-1995.html',linknu:'https://lich365.net/tu-vi-at-hoi-2022-nu-mang-1995.html',tomtat:'Năm Nhâm Dần là một năm bình yên đối với người tuổi Hợi. Công việc, tình duyên không có nhiều thử thách, mọi thứ khiến cho bản mệnh hài lòng.Nắm được tử vi 2022 theo ngày tháng năm sinh, tuổi Hợi sẽ có sự điều chỉnh hợp lý. Trong năm, bản thân chỉ cần chú ý tới sức khỏe, tránh thay đổi lớn trong công việc. '},
{year:1996,name:'Bính Tý',tamtai:'x',hoangoc:'x',linknam:'https://lich365.net/tu-vi-binh-ty-2022-nam-mang-1996.html',linknu:'https://lich365.net/tu-vi-binh-ty-2022-nu-mang-1996.html',tomtat:'Trong năm Nhâm Dần, người tuổi Tý sẽ gặt hái được nhiều cơ hội mới cho bản thân. Đồng nghĩa với đó cũng là những thách thức, trải nghiệm mới mẻ, đôi khi là sóng gió cần vượt qua.Năm nay người tuổi Tý sẽ gặt hái được nhiều thành quả nếu nỗ lực, chăm chỉ làm việc. Tiền bạc bội thu hơn so với năm cũ. Bản mệnh nếu tính toán thu chi hợp lý thì sẽ để được một khoản tiết kiệm cho tương lai.'},
{year:1997,name:'Đinh Sửu',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-dinh-suu-2022-nam-mang-1997.html',linknu:'https://lich365.net/tu-vi-dinh-suu-2022-nu-mang-1997.html',tomtat:'Bói tử vi 2022 cho thấy, tuổi Sửu năm này có nhiều chuyển biến trong công việc và chuyện tình cảm, đặc biệt đối với những người trẻ tuổi. Công việc có sự thay đổi nhưng theo chiều hướng tích cực, cuộc sống gặp nhiều niềm vui.Trong 12 con giáp, tuổi Sửu là những người "chậm mà chắc", làm việc gì cũng suy tính cẩn thận. Vì vậy trong năm Nhâm Dần này thành quả đạt được sẽ vô cùng mỹ mãn. Trong năm 2022 nếu có làm ăn lớn thì cần hợp tác với những người cùng chung chí hướng sẽ gặt hái được thành công.'},
{year:1998,name:'Mậu Dần',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-mau-dan-2022-nam-mang-1998.html',linknu:'https://lich365.net/tu-vi-mau-dan-2022-nu-mang-1998.html',tomtat:'Tuổi Dần là những người có ý chí lớn, nhiều hoài bão. Năm 2022 sẽ là thời điểm để họ khẳng định bản thân, chinh phục những mục tiêu lớn. Khoảng thời gian này tuổi Dần sẽ gặp được quý nhân phù trợ, giúp đỡ trong công việc. Sự nghiệp từ đây cũng sẽ thăng tiến vượt bậc. Tuổi Dần trong năm 2022 nếu muốn làm ăn lớn thì cần kiên trì hơn nữa. Bản thân vẫn còn sự nóng vội thì chỉ thu về được thành quả nhỏ nhoi.'},
{year:1999,name:'Kỷ Mão',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-ky-mao-2022-nam-mang-1999.html',linknu:'https://lich365.net/tu-vi-ky-mao-2022-nu-mang-1999.html',tomtat:'Là một năm bình ổn, bạn mệnh được an nhiên, tự tại, không phải suy nghĩ hay lo lắng quá nhiều. Năm nay sức khỏe của người tuổi Mão được cải thiện đáng kể, tinh thần vui tươi, lạc quan.Chuyện công việc duy trì đều đặn, nguồn thu tốt từ công việc tay trái. Gia đạo có thể xảy ra bất hòa, chỉ cần giữ bình tĩnh thì mọi chuyện đều được giải quyết.'},
{year:2000,name:'Canh Thìn',tamtai:'x',hoangoc:'x',linknam:'https://lich365.net/tu-vi-canh-thin-2022-nam-mang-2000.html',linknu:'https://lich365.net/tu-vi-canh-thin-2022-nu-mang-2000.html',tomtat:'Tuổi Thìn là những người có ý chí, ham học hỏi. Vì vậy dù là thời điểm nào, họ cũng sẽ có những mục tiêu rõ ràng và hành động dứt khoát.Sang năm Nhâm Dần, tuổi Thìn sẽ có những mục tiêu mới. Tuy có phần thử thách nhưng bản thân cần nỗ lực, làm việc hết sức mình thì sẽ vượt qua được.'},
{year:2001,name:'Tân Tỵ',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-tan-ty-2022-nam-mang-2001.html',linknu:'https://lich365.net/tu-vi-tan-ty-2022-nu-mang-2001.html',tomtat:'Người tuổi Tỵ trong năm 2022 sẽ để được một khoản tiết kiệm, hoặc sắm sửa tài sản có giá trị.Mục tiêu hàng đầu của tuổi Tỵ là tích lũy tài sản. Vì vậy trong năm 2022 sẽ là thời cơ họ đạt được điều đó.Tuy vậy cũng cần bảo quản tốt tiền bạc, không nên cho người khác vay mượn quá nhiều.'},
{year:2002,name:'Nhâm Ngọ',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-nham-ngo-2022-nam-mang-2002.html',linknu:'https://lich365.net/tu-vi-nham-ngo-2022-nu-mang-2002.html',tomtat:'Tuổi Ngọ là những người thích khám phá sự mới mẻ, liên tục học hỏi để cải thiện bản thân.Đối với những ai trước kia chưa tìm được một công việc phù hợp thì năm nay sẽ thành công hơn, gặt hái được nhiều thành quả, công việc thăng tiến. Những công việc tay trái cũng mang tới nguồn thu tốt cho người tuổi Ngọ trong năm này.'},
{year:2003,name:'Quý Mùi',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-quy-mui-2022-nam-mang-2003.html',linknu:'https://lich365.net/tu-vi-quy-mui-2022-nu-mang-2003.html',tomtat:'Người tuổi Mùi trong năm 2022 sẽ có nhiều thuận lợi trong chuyện tình cảm gia đình, gia đạo yên vui, con cái thành đạt.Trong năm này bản mệnh sẽ có nhiều tin vui đến bất ngờ, cuộc sống bình yên, hạnh phúc. Chú ý hơn trên phương diện sức khỏe. Đặc biệt những người tuổi tác đã cao nên tập luyện thể dục, gìn giữ sức khỏe của bản mệnh.'},
{year:2004,name:'Giáp Thân',tamtai:'x',hoangoc:'',linknam:'https://lich365.net/tu-vi-giap-than-2022-nam-mang-2004.html',linknu:'https://lich365.net/tu-vi-giap-than-2022-nu-mang-2004.html',tomtat:'Dần - Thân thuộc bộ Tứ hành xung, vì vậy vận trình năm 2022 sẽ có phần thử thách hơn đối với người tuổi Thân.Nhưng đây lại là quãng thời gian vô cùng bổ ích, người tuổi Thân sẽ có nhiều bài học, nhiều kinh nghiệm hơn. Và thành quả đạt được trong tương lai sẽ vô cùng xứng đáng.Vượt qua năm 2022, người tuổi Thân sẽ có nền tảng, tích lũy thêm kiến thức cho cuộc sống trong tương lai.'},
{year:2005,name:'Ất Dậu',tamtai:'',hoangoc:'x',linknam:'https://lich365.net/tu-vi-at-dau-2022-nam-mang-2005.html',linknu:'https://lich365.net/tu-vi-at-dau-2022-nu-mang-2005.html',tomtat:'Người tuổi Dậu trong năm 2022 sẽ có cơ hội trải nghiệm nhiều điều mới mẻ, thú vị trong cuộc sống. Năm này bản mệnh sẽ có nhiều lời mời hợp tác làm ăn, kinh doanh. Công việc tiến triển tốt hơn so với năm cũ.Có nhiều mối quan hệ xã giao, bản mệnh ra ngoài xã hội được mọi người yêu mến, kính trọng. Nhờ vào mối quan hệ bạn bè tốt mà công việc cũng thuận lợi hơn rất nhiều.'},
{year:2006,name:'Bính Tuất',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-binh-tuat-2022-nam-mang-2006.html',linknu:'https://lich365.net/tu-vi-binh-tuat-2022-nu-mang-2006.html',tomtat:'Năm 2022 hứa hẹn là một năm khởi sắc đối với người tuổi Tuất. Tài chính, tài lộc có phần dư giả, bản mệnh gặp được nhiều may mắn, niềm vui bất ngờ.Trong năm này, nếu đầu tư tài chính vào lĩnh vực nào đó thì cần chú ý tìm hiểu kỹ càng. Sẽ có nguồn thu tốt, tài lộc dồi dào hơn về cuối năm.Bản mệnh cũng gặp được bạn bè tốt, công việc suôn sẻ thuận lợi.'},
{year:2007,name:'Đinh Hợi',tamtai:'',hoangoc:'',linknam:'https://lich365.net/tu-vi-dinh-hoi-2022-nam-mang-2007.html',linknu:'https://lich365.net/tu-vi-dinh-hoi-2022-nu-mang-2007.html',tomtat:'Năm Nhâm Dần là một năm bình yên đối với người tuổi Hợi. Công việc, tình duyên không có nhiều thử thách, mọi thứ khiến cho bản mệnh hài lòng.Nắm được tử vi 2022 theo ngày tháng năm sinh, tuổi Hợi sẽ có sự điều chỉnh hợp lý. Trong năm, bản thân chỉ cần chú ý tới sức khỏe, tránh thay đổi lớn trong công việc. '},

],
	  queboi:[
		  {
			  noidung:"",
			  love:"",
			  job:""
		  }
	  ]
    };
  },
  computed: {},
  methods: {
    generateContent() {

    if(this.namsinh == 0 || this.ten==""){
      this.dialog = true;
      this.content =  "Bạn quên chưa nhập tên với năm sinh kìa :P"; 
    }else if(this.namsinh >2008 || this.namsinh <1952){
      this.dialog = true;
      this.content =  "Năm sih từ 1952 tới 2007 thui nha  >.<"; 
    }
    else{
    this.dialog = true;
	  let obj: any = {};
	  for(let i=0; i< this.namTuoi.length;i++){
		  if(this.namTuoi[i].year == this.namsinh){
			  obj =this.namTuoi[i];
			  break;
		  }
	  }
	  let tamtai = obj.tamtai ? "Có":"Không";
	  let hoangoc = obj.hoangoc ? "Có":"Không";
	  let kimlau = obj.kimlau ? "Có":"Không";
	  let link = this.isMale? obj.linknam : obj.linknu;
    let tuoiAm = new Date().getFullYear()  - this.namsinh + 1;
	  let str = '<a target="_blank" href="' + link + '">Chi tiết</a>';
      this.content =  this.ten + " thân mến! " + "<br/>" +
	  				  " Bạn sinh năm: "  + obj.year + "<br/>" +
              tuoiAm + " Tuổi * " +obj.name + "<br/>" +
					    " Tam Tai: " + tamtai + "<br/>" +
					    " Hoàng Ôc: " + hoangoc + "<br/>" +
					    " Kim Lâu: " + kimlau + "<br/>" +
					    obj.tomtat + "<br/>" +
					    str; 
    }
    },
  },
});
</script>

<style lang="scss">
@import "../styles/bootstrap-grid.min.css";
@import "../app.scss";

#xoay .v-input .v-input__control .v-input__slot {
  min-height: 40px !important;
}
.v-dialog__content.v-dialog__content--active  .v-card__text{
	background-image: url(dialog.jpg);
	background-repeat: no-repeat;
  	background-size: 100% 100%;
      font-size: 15px;
    padding: 29px;
    color: firebrick;
    font-family: cursive;  
}
.dialog-cl{
	background-color: #72100f !important;
	border-bottom: 1px solid #fa8d1e;
	color: #fff !important;
}
</style>
