<template>
	<Layout>
		<ul>
			<li 
				v-for="{ node } in $page.allWordPressPost.edges" 
				:key="node._id">
				<h2>{{ node.title }}</h2>
				<g-link :to="node.path">Read more</g-link>
			</li>
		</ul>
		<Pager :info="$page.allWordPressPost.pageInfo" />
	</Layout>
</template>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  }
};
</script>

<page-query>
query Blog ($page: Int) {
  allWordPressPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        _id
        title
        path
      }
    }
  }
}
</page-query>
